import { investorRepository, staffRepository } from '@/database';
import makeStaffService from './staff.service';
import makeInvestorService from './investor.service';


export const userService = makeStaffService({ repository: staffRepository });
export const investorService = makeInvestorService({ repository: investorRepository });