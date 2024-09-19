import Staff, { StaffDocument } from '@/database/mongoose/models/Staff';
import { IFarmRespository, IRepository, IRepositoryDependency, PasswordMananger, RepositoryFactory, } from '@/types';
import { InvestorPayload } from '@/types/services/investor.service';
import { StaffPayload } from '@/types/services/staff.service';
import { Document, FilterQuery, QueryOptions } from 'mongoose';
import Investor, { InvestorDocument } from './models/Investor';
import mongoose from 'mongoose';
import { FarmPayload } from '@/types/services/farm.service';
import Farm from './models/Farm';

mongoose.connect(process.env.MONGODB_URI!);

const StaffRepository = (dependencies?: IRepositoryDependency): IRepository => {
    if (!dependencies || !(dependencies?.passwordManager)) {
        throw new Error("Password manager dependency required")
    };

    async function create(input: StaffPayload): Promise<Document> {
        const hashedPassword = (input.password) ? await dependencies?.passwordManager.hashPassword(input.password!) : null;

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

const FarmRepository = (d?: IRepositoryDependency): IFarmRespository => {
    async function create(input: FarmPayload): Promise<Document> {

        const farm = await Farm.create({ ...input });

        return farm;
    }


    async function find(query: FilterQuery<FarmPayload>, options: QueryOptions = { lean: true }): Promise<Document | null> {
        return Farm.findOne(query, null, options);
    }

    async function findById(id: FarmPayload["id"]): Promise<Document | null> {
        return Farm.findById(id,);
    }

    async function deleteAll() {
        return Farm.deleteMany({});
    }

    async function update(query: FilterQuery<FarmPayload>, updatedata: FarmPayload): Promise<Document | null> {
        return Staff.findOneAndUpdate(query, updatedata, { new: true });
    }


    return Object.freeze({
        create,
        find,
        findById,
        update,
        deleteAll
    });
}

const InvestorRepository = (dependencies?: IRepositoryDependency): IRepository => {
    if (!dependencies || !(dependencies.passwordManager)) throw new Error("Password manager dependency required");

    async function create(input: InvestorPayload): Promise<Document> {
        const hashedPassword = (input.password) ? await dependencies?.passwordManager.hashPassword(input.password!) : null;

        return Investor.create({ ...input, password: hashedPassword });
    }

    async function login({ email, password }: { email: InvestorDocument["email"], password: InvestorDocument["password"] }) {
        const user = await find({ email }, { lean: false });

        if (!user) {
            throw new Error("Staff not found");
        }

        /// Todo: return jwt token;
        return dependencies?.passwordManager.verfiyPassword(password, user.password) || false;
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


const makeMongooseRepo: RepositoryFactory = (repository: string, repositoryDependency?: IRepositoryDependency): IRepository => {


    const Repositories: { [key: string]: (d?: IRepositoryDependency) => IRepository } = {
        "staff": StaffRepository,
        "investor": InvestorRepository,
        "farm": FarmRepository
    }

    if (!Repositories[repository]) {
        throw new Error("Invalid repository");
    }


    return Repositories[repository](repositoryDependency);


}



export default makeMongooseRepo;