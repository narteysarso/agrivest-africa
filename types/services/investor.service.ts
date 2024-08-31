import { z } from 'zod';
import { InvestorInput, InvestorRole } from '..';
import { ResponsePayload } from '.';

export const InvestorDataSchema = z.object({
    id: z.string(),
    fullname: z.string().trim().min(2).max(100),
    firstname: z.string().trim().min(2).max(50),
    lastname: z.string().trim().min(2).max(50),
    image: z.string().trim().min(2).max(256),
    email: z.string().trim().email(),
    verified: z.boolean(),
    createdAt: z.date(),
    deletedAt: z.date(),
    lastseen: z.date()
})


export const InvestorPayloadSchema = z.object({
    id: z.string().optional(),
    firstname: z.string().trim().min(2).max(50),
    lastname: z.string().trim().min(2).max(50),
    image: z.string().trim().min(2).max(256).optional(),
    email: z.string().trim().email(),
    role: z.nativeEnum(InvestorRole).optional(),
    password: z.string().trim().optional(),
    deletedAt: z.date().optional(),
})

export interface InvestorData extends z.infer<typeof InvestorDataSchema> { };

export interface InvestorPayload extends z.infer<typeof InvestorPayloadSchema> { };


export interface IInvestorService {
    register(input: InvestorPayload): Promise<ResponsePayload>;
    findByEmail(email: InvestorData["email"]): Promise<ResponsePayload>;
    findById(id: InvestorData["id"]): Promise<ResponsePayload>;
    update(id: InvestorData["id"], newDetails: InvestorData): Promise<ResponsePayload>;
    updatePassword(id: InvestorData["id"], oldPassword: InvestorInput["password"], newPassword: InvestorInput["password"]): Promise<ResponsePayload>;
    markDeleted(id: InvestorData["id"]): Promise<ResponsePayload>;
    deleteAll(): Promise<ResponsePayload>;
    login({ email, password }: { email: InvestorPayload["email"], password: InvestorPayload["password"] }): Promise<ResponsePayload>;
}

