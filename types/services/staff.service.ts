import { z } from 'zod';
import { StaffInput, StaffRole, StaffStatus } from '..';
import { ResponsePayload } from '.';

export const StaffDataSchema = z.object({
    id: z.string(),
    fullname: z.string().trim().min(2).max(100),
    firstname: z.string().trim().min(2).max(50),
    lastname: z.string().trim().min(2).max(50),
    image: z.string().trim().min(2).max(256),
    status: z.nativeEnum(StaffStatus),
    role: z.nativeEnum(StaffRole),
    email: z.string().trim().email(),
    createdAt: z.date(),
    deletedAt: z.date(),
    lastseen: z.date()
})

export const StaffPayloadSchema = z.object({
    id: z.string().optional(),
    firstname: z.string().trim().min(2).max(50),
    lastname: z.string().trim().min(2).max(50),
    image: z.string().trim().min(2).max(256).optional(),
    status: z.nativeEnum(StaffStatus).optional(),
    role: z.nativeEnum(StaffRole),
    email: z.string().trim().email(),
    password: z.string().trim().optional(),
    deletedAt: z.date().optional(),
})

export interface StaffData extends z.infer<typeof StaffDataSchema> { };

export interface StaffPayload extends z.infer<typeof StaffPayloadSchema> { };



export interface IStaffService {
    createStaff(input: StaffPayload): Promise<ResponsePayload>;
    findStaffByEmail(email: StaffData["email"]): Promise<ResponsePayload>;
    findStaffById(id: StaffData["id"]): Promise<ResponsePayload>;
    updateStaff(id: StaffData["id"], newDetails: StaffData): Promise<ResponsePayload>;
    updateStaffPassword(id: StaffData["id"], oldPassword: StaffInput["password"], newPassword: StaffInput["password"]): Promise<ResponsePayload>;
    markStaffDeleted(id: StaffData["id"]): Promise<ResponsePayload>;
    deleteAllStaffs(): Promise<ResponsePayload>;
    loginStaff({ email, password }: { email: StaffPayload["email"], password: StaffPayload["password"] }): Promise<ResponsePayload>;
}

