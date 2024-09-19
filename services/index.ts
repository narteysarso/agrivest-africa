import { farmRepository, investorRepository, staffRepository } from '@/database';
import makeStaffService from './staff.service';
import makeInvestorService from './investor.service';
import { IFarmRespository, IInventionRepository, IStaffRepository } from '@/types';
import makeFarmService from './farm.service';


export const userService = makeStaffService({ repository: staffRepository as IStaffRepository });
export const investorService = makeInvestorService({ repository: investorRepository as IInventionRepository });
export const farmService = makeFarmService({ repository: farmRepository as IFarmRespository });