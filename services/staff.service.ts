import InvalidCredentialsError from '@/lib/errors/invalid-credentials';
import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import { generateOTP, makeStaffData, validateStaff, verfiyPassword } from '@/lib/helpers';
import { IStaffRepository } from '@/types';
import { ResponsePayload } from '@/types/services';
import { IStaffService, StaffPayload } from '@/types/services/staff.service';


export default function makeStaffService({ repository }: { repository: IStaffRepository }): IStaffService {

    const createStaff = async (input: StaffPayload): Promise<ResponsePayload> => {
        const [error, staffData] = validateStaff(input);

        // http error data validation
        if (error) {
            throw new InvalidPropertyError(error);
        }

        if (!staffData) {
            throw new Error("Operation failed.Try again or contact server master");
        }

        staffData.password = staffData?.password ?? generateOTP("222222");

        // TODO: send email

        const result = await repository.create(staffData!);

        //prepare http response
        return Object.freeze({
            statusCode: 201
        })

    }

    const findStaffByEmail = async (email: StaffPayload["email"]): Promise<ResponsePayload> => {

        const result = await repository.find({ email });

        if (!result) {
            throw new Error("Staff not found");
        }

        const staffData = makeStaffData(result);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: staffData
        });
    }


    const findStaffById = async (id: StaffPayload["id"]): Promise<ResponsePayload> => {

        const result = await repository.find({ _id: id });

        if (!result) {
            throw new Error("Staff not found");
        }

        const staffData = makeStaffData(result);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: staffData,
        });

    }

    const updateStaff = async (id: StaffPayload["id"], newDetails: StaffPayload): Promise<ResponsePayload> => {

        const result = await findStaffById(id);

        if (!result) {
            throw new Error("Staff not found");
        }

        const updatedStaff = await repository.update({ _id: id }, newDetails);

        if (!updatedStaff) {
            throw new Error("Update failed");
        }

        const staffData = makeStaffData(updatedStaff);

        //prepare http response
        return Object.freeze({
            statusCode: 200,
            data: staffData
        });
    }

    const updateStaffPassword = async (id: StaffPayload["id"], oldPassword: StaffPayload["password"], newPassword: StaffPayload["password"]): Promise<ResponsePayload> => {
        const staff = await repository.find({ _id: id });

        if (!staff) {
            throw new Error("Staff not found");
        }

        if (!oldPassword || !newPassword) {
            throw new Error("Invalid payload")
        }

        const isValidPassword = await verfiyPassword(oldPassword, staff.password);

        if (!isValidPassword) {
            throw new InvalidCredentialsError("Invalid credentials");
        }

        const updatedStaff = await repository.update({ _id: id }, { password: newPassword } as StaffPayload);

        if (!updatedStaff) {
            throw new Error("Password update failed. Please try again or contact server master");
        }
        return Object.freeze({
            statusCode: 201,
            data: makeStaffData(updatedStaff)
        })
    }

    const markStaffDeleted = async (id: StaffPayload["id"]): Promise<ResponsePayload> => {
        const staff = await repository.find({ _id: id });

        if (!staff) {
            throw new NotFound("Staff not found");
        }

        const updatedStaff = await repository.update({ _id: id }, { deletedAt: new Date() } as StaffPayload);

        if (!updatedStaff) {
            throw new Error("Failed to mark staff deleted. Try again or contact server master");
        }

        return {
            statusCode: 200,
            data: makeStaffData(updatedStaff)
        };

    }

    const deleteAllStaffs = async (): Promise<any> => {
        await repository.deleteAll();

        return {
            statusCode: 201,
        }
    }

    const loginStaff = async ({ email, password }: { email: StaffPayload["email"], password: StaffPayload["password"] }): Promise<any> => {
        if (!email || !password) throw Error("Invalid request body");

        const foundStaff = await repository.find({ email });

        if (!foundStaff) throw Error("Staff not found");

        if (!verfiyPassword(password, foundStaff.password)) throw Error("Invalid user credentials");

        // perform DTO on `foundStaff` before return;
        delete foundStaff.password;

        return foundStaff;

    }

    return Object.freeze({
        createStaff,
        findStaffByEmail,
        findStaffById,
        updateStaff,
        updateStaffPassword,
        markStaffDeleted,
        deleteAllStaffs,
        loginStaff
    });

}


