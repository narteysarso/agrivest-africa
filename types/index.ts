
export type NavigationItemsType = {
    title: string,
    href: string,
    description: string,
    items?: NavigationItemsType[]
}

export enum StaffStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

export interface StaffInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}

export interface StaffData {
    id: string;
    fullname: string;
    firstname: string;
    lastname: string;
    image: string;
    status: StaffStatus;
    role: string;
    email: string;
    createdAt: Date;
    deletedAt: Date;
    lastseen: Date;
}

/// Util types
export interface PasswordMananger {
    hashPassword(plainText: string): Promise<string>;
    verfiyPassword(plainText: string, cypher: string): Promise<boolean>
}

/// Database types

export interface DatabaseInterface {
    createStaff(input: Partial<StaffData>): Promise<any>;
    findStaff(query: any, options: any): Promise<any>;
    loginStaff({ email, password }: { email: string, password: string }): Promise<boolean>
    deleteAllStaffs(): Promise<any>;
}

export type DatabaseFactory = ({ passwordManager }: { passwordManager: PasswordMananger }) => DatabaseInterface;

export type DatabaseProviderName = "mongoose" | "postgres";
