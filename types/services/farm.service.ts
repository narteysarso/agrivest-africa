import AppConfig from '@/app.config';
import { z } from 'zod';

export enum Currencies {
    USD = "USD",
    GHS = "GHS",
    EUR = "EUR"
}

export enum InvestmentDurationUnits {
    DAYS = "days",
    MONTHS = "months",
    YEARS = "years"
};

export enum PublishStatuses {
    DRAFT = "draft",
    PUBLISHED = "published"
}

export enum FarmType {
    MAIZE = "maize",
    RICE = "rice",
    GROUNDNUT = "groundnut",
    BEANS = "beans",
    SOYABEANS = "soyabeans"
}

export const FarmData = z.object({
    id: z.string().optional(),
    imageUrl: z.string().optional(),
    name: z.string().min(AppConfig.constants.minFarmNameLength),
    description: z.string().optional(),
    type: z.nativeEnum(FarmType),
    archerPerUnit: z.number().min(AppConfig.constants.minimumFarmArcherage),
    totalUnits: z.number().min(AppConfig.constants.minimumFarmUnits),
    orderedUnits: z.number().optional(),
    unitCost: z.number().min(AppConfig.constants.minimumUnitCost),
    publishStatus: z.nativeEnum(PublishStatuses),
    currency: z.nativeEnum(Currencies).default(Currencies.USD).optional(),
    season: z.object({
        from: z.date(),
        to: z.date()
    }),
    investmentDuration: z.number().min(AppConfig.constants.defaultFarmInvestmentMinimumDurationInDays),
    investmentDeadline: z.date().optional(),
    deletedAt: z.date().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export const FarmPayloadSchema = z.object({
    id: z.string().optional(),
    imageUrl: z.string().optional(),
    name: z.string().min(AppConfig.constants.minFarmNameLength),
    description: z.string().optional(),
    type: z.nativeEnum(FarmType),
    archerPerUnit: z.number().min(AppConfig.constants.minimumFarmArcherage),
    totalUnits: z.number().min(AppConfig.constants.minimumFarmUnits),
    orderedUnits: z.number().optional(),
    unitCost: z.number().min(AppConfig.constants.minimumUnitCost),
    publishStatus: z.nativeEnum(PublishStatuses),
    currency: z.nativeEnum(Currencies).default(Currencies.USD).optional(),
    season: z.object({
        from: z.date(),
        to: z.date()
    }),
    investmentDuration: z.string().min(AppConfig.constants.defaultFarmInvestmentMinimumDurationInDays).transform((val) => parseFloat(val)),
    investmentDeadline: z.date().optional(),
});

export interface FarmPayload extends z.infer<typeof FarmPayloadSchema> { }

export interface Farm extends z.infer<typeof FarmData> { }

export interface IFarmService {
    create(input: FarmPayload): Promise<boolean>;
    findAll(limit: number, offset: number, size: number): Promise<Farm[]>;
    findById(id: FarmPayload["id"]): Promise<Farm>;
    update(id: FarmPayload["id"], newDetails: FarmPayload): Promise<boolean>;
    publishStatus(id: FarmPayload["id"], newPublisState: FarmPayload["publishStatus"]): Promise<boolean>;
    markdeleted(id: FarmPayload["id"]): Promise<boolean>;
}