import { IFarmRespository } from '@/types';
import { Farm, FarmPayload, IFarmService } from '@/types/services/farm.service';

export default function makeFarmService({ repository }: { repository: IFarmRespository }): IFarmService {
    const create = async (input: FarmPayload): Promise<boolean> => {

        await repository.create(input);

        return true;
    }
    const findAll = async (limit: number, offset: number, size: number): Promise<Farm[]> => {
        return []
    }
    const findById = async (id: FarmPayload["id"]): Promise<Farm | null> => {
        return Object()
    }
    const update = async (id: FarmPayload["id"], newDetails: FarmPayload): Promise<boolean> => {
        return false;
    }
    const publishStatus = async (id: FarmPayload["id"], newPublisState: FarmPayload["publishStatus"]): Promise<boolean> => {
        return false;
    }
    const markdeleted = async (id: FarmPayload["id"]): Promise<boolean> => {
        return false;
    }


    return {
        create,
        findAll,
        findById,
        update,
        publishStatus,
        markdeleted
    }


}