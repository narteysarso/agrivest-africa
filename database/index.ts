/**
 * This module is a database factory that can created different database.
 * By default it create a mongodb database.
 * We use strategy pattern to spin different databases based on a database configuration
 */
import { hashPassword, verfiyPassword } from '@/lib/helpers';
import { DatabaseProviderName, IRepository, PasswordMananger, RepositoryFactory } from '@/types';
import AppConfig from '@/app.config';
import makeMongooseRepo from './mongoose';

const databaseConfigs: { [key: string]: RepositoryFactory } = {
    "mongoose": makeMongooseRepo
}

const passwordManager: PasswordMananger = { hashPassword, verfiyPassword };

const repositoryProvider = databaseConfigs[AppConfig.database.defaultProvider as DatabaseProviderName];

if (!repositoryProvider) throw new Error("Unkwon database provider specified");

export const staffRepository: IRepository = repositoryProvider("staff", { passwordManager });
export const investorRepository: IRepository = repositoryProvider("investor", { passwordManager });
export const farmRepository: IRepository = repositoryProvider("farm");


