import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import { makeFarm, validateFarm } from '@/lib/helpers';
import { IFarmRespository } from '@/types';
import { Farm, FarmPayload, IFarmService } from '@/types/services/farm.service';

export default function makeFarmService({ repository }: { repository: IFarmRespository }): IFarmService {
    const create = async (input: FarmPayload): Promise<boolean> => {

        const [error, validatedInput] = validateFarm(input);

        // http error data validation
        if (error) {
            throw new InvalidPropertyError(error);
        }

        if (!validatedInput) {
            throw new Error("Operation failed.Try again or contact server master");
        }

        await repository.create(validatedInput);

        return true;
    }

    const findAll = async (limit: number, offset: number, size: number): Promise<Farm[]> => {

        const results = await repository.findAll();

        if (!results || !results.length) throw new NotFound("There are no farms");

        const farms = results.map(res => makeFarm(res));

        return farms
    }

    const findById = async (id: FarmPayload["id"]): Promise<Farm> => {
        const result = await repository.findById(id);

        if (!result) throw new NotFound("Farm not found");

        return makeFarm(result);
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