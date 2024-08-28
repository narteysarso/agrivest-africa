import { StaffData, StaffInput } from '..';

export interface IStaffService {
    createStaff(input: StaffInput): Promise<any>;
    findStaffByEmail(email: StaffData["email"]): Promise<any>;
    findStaffById(id: StaffData["id"]): Promise<any>;
    findStaff(input: StaffData["id"], options: any): Promise<any>;
    updateStaff(id: StaffData["id"], newDetails: StaffData): Promise<any>;
    updateStaffPassword(id: StaffData["id"], oldPassword: StaffInput["password"], newPassword: StaffInput["password"]): Promise<any>;
    markStaffDeleted(id: StaffData["id"]): Promise<any>;
    deleteAllStaffs(): Promise<any>;
    loginStaff({ email, password }: { email: StaffInput["email"], password: StaffInput["password"] }): Promise<any>;
}
