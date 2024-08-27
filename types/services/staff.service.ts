import { UserInput } from '..';

export interface IUserService {
    createUser(input: UserInput): Promise<any>;
    findUserByEmail(): Promise<any>;
    findUserById(): Promise<any>;
    findUser(input: Partial<UserInput>, options: any): Promise<any>;
    updateUser(): Promise<any>;
    updateUserPassword(): Promise<any>;
    markUserDeleted(): Promise<any>;
    deleteAllUsers(): Promise<any>;
    loginUser(input: Partial<UserInput>): Promise<any>;
}
