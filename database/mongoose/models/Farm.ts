import { Currencies } from '@/types/services/farm.service';
import mongoose, { Schema } from 'mongoose';

const farmSchema = new Schema({
    imageUrl: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    totalUnits: {
        type: Number,
        required: true,
    },
    orderedUnits: {
        type: Number,
        default: 0
    },
    archerPerUnit: {
        type: Number,
        required: true
    },
    publishStatus: {
        type: String,
        required: true
    },
    investmentDurationInDays: {
        type: Number,
        required: true,
    },
    investmentDeadline: {
        type: Date,
        required: true,
    },
    costPerUnit: {
        type: Number,
        required: true,
    },
    season: {
        type: {
            from: Date,
            to: Date
        },
        require: true
    },
    currency: {
        type: String,
        required: true,
        default: Currencies.USD
    },
    deletedAt: {
        type: Date
    }
}, {
    timestamps: true
});

farmSchema.index({ name: 1 });

farmSchema.virtual("availableUnits").get(function () {
    return ``;
});

const Farm = mongoose.models.Farm || mongoose.model("Farm", farmSchema);

export default Farm;