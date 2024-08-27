/**
 * This module is a database factory that can created different database.
 * By default it create a mongodb database.
 * We use strategy pattern to spin different databases based on a database configuration
 */
import { hashPassword, verfiyPassword } from '@/lib/helpers';
import { DatabaseFactory, DatabaseInterface, DatabaseProviderName, PasswordMananger } from '@/types';
import makeMongooseDB from './mongoose';
import AppConfig from '@/app.config';

const databaseConfigs: { [key: string]: DatabaseFactory } = {
    "mongoose": makeMongooseDB
}

const passwordManager: PasswordMananger = { hashPassword, verfiyPassword };

const databaseProvider = databaseConfigs[AppConfig.database.defaultProvider as DatabaseProviderName];

if (!databaseProvider) throw new Error("Unkwon database provider specified");

const database: DatabaseInterface = databaseProvider({ passwordManager });

export default database;


