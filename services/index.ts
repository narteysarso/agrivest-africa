import database from '@/database';
import makeStaffService from './staff.service';


export const userService = makeStaffService({ database });