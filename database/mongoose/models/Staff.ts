import { verfiyPassword } from '@/lib/helpers';
import { StaffInput } from '@/types';
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);

export interface StaffDocument extends StaffInput, mongoose.Document {
    fullname: String;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: String,
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.index({ email: 1 });

// virtual method to fill in fullname
userSchema.virtual("fullname").get(function () {
    return `${this.firstname} ${this.lastname}`;
});


userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this;

    return await verfiyPassword(candidatePassword, user.password);
}


const Staff = mongoose.models.Staff || mongoose.model<StaffDocument>("Staff", userSchema);

export default Staff;