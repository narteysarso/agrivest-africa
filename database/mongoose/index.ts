import Staff, { StaffDocument } from '@/database/mongoose/models/Staff';
import { DatabaseFactory, DatabaseInterface, PasswordMananger, StaffInput } from '@/types';
import { FilterQuery, QueryOptions } from 'mongoose';

const makeMongooseDB: DatabaseFactory = ({ passwordManager }: { passwordManager: PasswordMananger }): DatabaseInterface => {

    async function createStaff(input: StaffInput) {
        const hashedPassword = await passwordManager.hashPassword(input.password);

        return Staff.create({ ...input, password: hashedPassword });
    }

    async function loginStaff({ email, password }: { email: StaffDocument["email"], password: StaffDocument["password"] }) {
        const user = await findStaff({ email }, { lean: false });

        if (!user) {
            throw new Error("Staff not found");
        }

        /// Todo: return jwt token;
        return user.comparePassword(password);
    }

    async function findStaff(query: FilterQuery<StaffDocument>, options: QueryOptions = { lean: true }) {
        return Staff.findOne(query, null, options);
    }

    async function deleteAllStaffs() {
        return Staff.deleteMany({});
    }


    return Object.freeze({
        createStaff,
        findStaff,
        loginStaff,
        deleteAllStaffs
    })
}


export default makeMongooseDB;