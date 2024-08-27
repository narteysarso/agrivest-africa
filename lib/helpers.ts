import { PasswordMananger } from '@/types';
import bcrypt from "bcrypt";

export const hashPassword: PasswordMananger["hashPassword"] = (plainText: string): Promise<string> => {
    return bcrypt.hash(plainText, 10);
}

export const verfiyPassword: PasswordMananger["verfiyPassword"] = (plainText: string, cypher: string): Promise<boolean> => {
    return bcrypt.compare(plainText, cypher);
}
