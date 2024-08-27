import { StaffInput } from '..';

export interface IStaffService {
    createStaff(input: StaffInput): Promise<any>;
    findStaffByEmail(): Promise<any>;
    findStaffById(): Promise<any>;
    findStaff(input: Partial<StaffInput>, options: any): Promise<any>;
    updateStaff(): Promise<any>;
    updateStaffPassword(): Promise<any>;
    markStaffDeleted(): Promise<any>;
    deleteAllStaffs(): Promise<any>;
    loginStaff(input: Partial<StaffInput>): Promise<any>;
}
