import AppConfig from '@/app.config';
import { z } from 'zod';
import { FarmType, PublishStatuses } from '..';
import { ResponsePayload } from '.';
import { Currencies } from '@/components/admin/farm-form';

export const FarmData = z.object({
    id: z.string().optional(),
    imageUrl: z.string().optional(),
    name: z.string().min(AppConfig.constants.minFarmNameLength),
    type: z.nativeEnum(FarmType),
    archerPerUnit: z.number().min(AppConfig.constants.minimumFarmArcherage),
    totalUnits: z.number().min(AppConfig.constants.minimumFarmUnits),
    orderedUnits: z.number().optional(),
    costPerUnit: z.number().min(AppConfig.constants.minimumUnitCost),
    publishStatus: z.nativeEnum(PublishStatuses),
    currency: z.nativeEnum(Currencies).default(Currencies.USD).optional(),
    deletedAt: z.date().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

export const FarmPayloadSchema = z.object({
    id: z.string().optional(),
    imageUrl: z.string().optional(),
    name: z.string().min(AppConfig.constants.minFarmNameLength),
    type: z.nativeEnum(FarmType),
    archerPerUnit: z.number().min(AppConfig.constants.minimumFarmArcherage),
    totalUnits: z.number().min(AppConfig.constants.minimumFarmUnits),
    costPerUnit: z.number().min(AppConfig.constants.minimumUnitCost),
    publishStatus: z.nativeEnum(PublishStatuses),
    currency: z.nativeEnum(Currencies).default(Currencies.USD).optional(),
    deletedAt: z.date().optional(),
})


export interface FarmPayload extends z.infer<typeof FarmPayloadSchema> { }


export interface IFarmService {
    create(input: FarmPayload): Promise<ResponsePayload>;
    findById(id: FarmPayload["id"]): Promise<ResponsePayload>;
    update(id: FarmPayload["id"], newDetails: FarmPayload): Promise<ResponsePayload>;
    publishStatus(id: FarmPayload["id"], newPublisState: FarmPayload["publishStatus"]): Promise<ResponsePayload>;
    markdeleted(id: FarmPayload["id"]): Promise<ResponsePayload>;
}