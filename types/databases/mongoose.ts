import mongoose from 'mongoose';
import { StaffInput } from '..';

export interface StaffDocument extends StaffInput, mongoose.Document {
    fullname: String;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
