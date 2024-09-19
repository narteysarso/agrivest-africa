import InvalidCredentialsError from '@/lib/errors/invalid-credentials';
import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import { generateOTP, makeInvestorData, validateInvestor, verfiyPassword } from '@/lib/helpers';
import { IInventionRepository } from '@/types';
import { ResponsePayload } from '@/types/services';
import { IInvestorService, InvestorPayload } from '@/types/services/investor.service';


export default function makeInvestorService({ repository }: { repository: IInventionRepository }): IInvestorService {

    const register = async (input: InvestorPayload): Promise<ResponsePayload> => {
        const [error, investorData] = validateInvestor(input);

        // http error data validation
        if (error) {
            throw new InvalidPropertyError(error);
        }

        if (!investorData) {
            throw new Error("Operation failed.Try again or contact server master");
        }

        investorData.password = investorData?.password ?? generateOTP("222222");

        // TODO: send email

        const result = await repository.create(investorData!);

        //prepare http response
        return Object.freeze({
            statusCode: 201
        })

    }

    const findByEmail = async (email: InvestorPayload["email"]): Promise<ResponsePayload> => {

        const result = await repository.find({ email });

        if (!result) {
            throw new Error("Investor not found");
        }

        const investorData = makeInvestorData(result);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: investorData
        });
    }


    const findById = async (id: InvestorPayload["id"]): Promise<ResponsePayload> => {

        const result = await repository.find({ _id: id });

        if (!result) {
            throw new Error("Investor not found");
        }

        const investorData = makeInvestorData(result);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: investorData,
        });

    }

    const update = async (id: InvestorPayload["id"], newDetails: InvestorPayload): Promise<ResponsePayload> => {

        const result = await findById(id);

        if (!result) {
            throw new Error("Investor not found");
        }

        const updatedInvestor = await repository.update({ _id: id }, newDetails);

        if (!updatedInvestor) {
            throw new Error("Update failed");
        }

        const investorData = makeInvestorData(updatedInvestor);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: investorData
        });
    }

    const updatePassword = async (id: InvestorPayload["id"], oldPassword: InvestorPayload["password"], newPassword: InvestorPayload["password"]): Promise<ResponsePayload> => {
        const investor = await repository.find({ _id: id });

        if (!investor) {
            throw new Error("Investor not found");
        }

        if (!oldPassword || !newPassword) {
            throw new Error("Invalid payload")
        }

        const isValidPassword = await verfiyPassword(oldPassword, investor.password);

        if (!isValidPassword) {
            throw new InvalidCredentialsError("Invalid credentials");
        }

        const updatedInvestor = await repository.update({ _id: id }, { password: newPassword } as InvestorPayload);

        if (!updatedInvestor) {
            throw new Error("Password update failed. Please try again or contact server master");
        }
        return Object.freeze({
            statusCode: 201,
            data: makeInvestorData(updatedInvestor)
        })
    }

    const markDeleted = async (id: InvestorPayload["id"]): Promise<ResponsePayload> => {
        const investor = await repository.find({ _id: id });

        if (!investor) {
            throw new NotFound("Investor not found");
        }

        const updatedInvestor = await repository.update({ _id: id }, { deletedAt: new Date() } as InvestorPayload);

        if (!updatedInvestor) {
            throw new Error("Failed to mark investor deleted. Try again or contact server master");
        }

        return {
            statusCode: 200,
            data: makeInvestorData(updatedInvestor)
        };

    }

    const deleteAll = async (): Promise<any> => {
        await repository.deleteAll();

        return {
            statusCode: 201,
        }
    }

    const login = async ({ email, password }: { email: InvestorPayload["email"], password: InvestorPayload["password"] }): Promise<any> => {
        if (!email || !password) throw new InvalidCredentialsError("Invalid credentials");

        const foundInvestor = await repository.find({ email });

        if (!foundInvestor) throw Error("Staff not found");

        if (!verfiyPassword(password, foundInvestor.password)) throw Error("Invalid user credentials");

        // perform DTO on `foundStaff` before return;
        delete foundInvestor.password;

        return foundInvestor;
    }

    return Object.freeze({
        register,
        findByEmail,
        findById,
        update,
        updatePassword,
        markDeleted,
        login,
        deleteAll
    });

}


