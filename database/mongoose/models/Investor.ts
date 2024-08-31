import { InvestorInput } from '@/types';
import mongoose, { Schema } from "mongoose";
import { string } from 'zod';

mongoose.connect(process.env.MONGODB_URI!);

export interface InvestorDocument extends InvestorInput, mongoose.Document {
    fullname: String;
    createdAt: Date;
    updatedAt: Date;
}

const investorSchema = new Schema({
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
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
});

investorSchema.index({ email: 1 });

// virtual method to fill in fullname
investorSchema.virtual("fullname").get(function () {
    return `${this.firstname} ${this.lastname}`;
});
investorSchema.path("role").default("investor");


const Investor = mongoose.models.Investor || mongoose.model<InvestorDocument>("Investor", investorSchema);

export default Investor;