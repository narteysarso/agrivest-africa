export type NavigationItemsType = {
    title: string,
    href: string,
    description: string,
    items?: NavigationItemsType[]
}

export interface StaffInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface StaffData extends StaffInput {
    firstname: string;
    lastname: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

/// Util types
export interface PasswordMananger {
    hashPassword(plainText: string): Promise<string>;
    verfiyPassword(plainText: string, cypher: string): Promise<boolean>
}

/// Database types

export interface DatabaseInterface {
    createStaff(input: StaffInput): Promise<any>;
    findStaff(query: any, options: any): Promise<any>;
    loginStaff({ email, password }: { email: string, password: string }): Promise<boolean>
    deleteAllStaffs(): Promise<any>;
}

export type DatabaseFactory = ({ passwordManager }: { passwordManager: PasswordMananger }) => DatabaseInterface;

export type DatabaseProviderName = "mongoose" | "postgres";
