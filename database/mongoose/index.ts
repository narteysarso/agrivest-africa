import Staff, { StaffDocument } from '@/database/mongoose/models/Staff';
import { IRepository, IRepositoryDependency, PasswordMananger, RepositoryFactory, } from '@/types';
import { InvestorPayload } from '@/types/services/investor.service';
import { StaffPayload } from '@/types/services/staff.service';
import { Document, FilterQuery, QueryOptions } from 'mongoose';
import Investor, { InvestorDocument } from './models/Investor';


const StaffRepository = ({ passwordManager }: IRepositoryDependency): IRepository => {
    async function create(input: StaffPayload): Promise<Document> {
        const hashedPassword = (input.password) ? await passwordManager.hashPassword(input.password!) : null;

        return Staff.create({ ...input, password: hashedPassword });
    }

    async function login({ email, password }: { email: StaffDocument["email"], password: StaffDocument["password"] }) {
        const user = await find({ email }, { lean: false });

        if (!user) {
            throw new Error("Staff not found");
        }

        /// Todo: return jwt token;
        return user.comparePassword(password);
    }

    async function find(query: FilterQuery<StaffDocument>, options: QueryOptions = { lean: true }): Promise<StaffDocument | null> {
        return Staff.findOne(query, null, options);
    }

    async function deleteAll() {
        return Staff.deleteMany({});
    }

    async function update(query: FilterQuery<StaffDocument>, updatedata: StaffPayload): Promise<Document | null> {
        return Staff.findOneAndUpdate(query, updatedata, { new: true });
    }


    return {
        create,
        find,
        login,
        update,
        deleteAll
    }
}

const InvestorRepository = ({ passwordManager }: IRepositoryDependency): IRepository => {
    async function create(input: InvestorPayload): Promise<Document> {
        const hashedPassword = (input.password) ? await passwordManager.hashPassword(input.password!) : null;

        return Investor.create({ ...input, password: hashedPassword });
    }

    async function login({ email, password }: { email: InvestorDocument["email"], password: InvestorDocument["password"] }) {
        const user = await find({ email }, { lean: false });

        if (!user) {
            throw new Error("Staff not found");
        }

        /// Todo: return jwt token;
        return passwordManager.verfiyPassword(password, user.password);
    }

    async function find(query: FilterQuery<InvestorDocument>, options: QueryOptions = { lean: true }): Promise<InvestorDocument | null> {
        return Investor.findOne(query, null, options);
    }

    async function deleteAll() {
        return Investor.deleteMany({});
    }

    async function update(query: FilterQuery<InvestorDocument>, updatedata: InvestorPayload): Promise<Document | null> {
        return Investor.findOneAndUpdate(query, updatedata, { new: true });
    }


    return {
        create,
        find,
        login,
        update,
        deleteAll
    }
}


const makeMongooseRepo: RepositoryFactory = ({ passwordManager }: IRepositoryDependency, repository: string): IRepository => {


    const Repositories: { [key: string]: (d: IRepositoryDependency) => IRepository } = {
        "staff": StaffRepository,
        "investor": InvestorRepository
    }

    if (!Repositories[repository]) {
        throw new Error("Invalid repository");
    }


    return Repositories[repository]({ passwordManager });


}



export default makeMongooseRepo;