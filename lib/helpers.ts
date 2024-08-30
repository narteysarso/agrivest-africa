import { PasswordMananger } from '@/types';
import { StaffData, StaffDataSchema, StaffPayload, StaffPayloadSchema } from '@/types/services/staff.service';
import bcrypt from "bcrypt";
import { Document } from 'mongoose';
import HttpError from './errors/http-error';
import { object } from 'zod';
import { InvestorData, InvestorDataSchema, InvestorPayload, InvestorPayloadSchema } from '@/types/services/investor.service';

export const hashPassword: PasswordMananger["hashPassword"] = (plainText: string): Promise<string> => {
    return bcrypt.hash(plainText, 10);
}

export const verfiyPassword: PasswordMananger["verfiyPassword"] = (plainText: string, cypher: string): Promise<boolean> => {
    return bcrypt.compare(plainText, cypher);
}


export const validateStaff = (staffData: unknown): [error: string | null, result: StaffPayload | null] => {

    const results = StaffPayloadSchema.safeParse(staffData);

    if (!results.success) {
        return [results.error.issues.reduce((prev, issue,) => (`${prev} ${issue.path[0]} : ${issue.message}`), ""), null];
    }

    return [null, results.data];
}

export const validateInvestor = (investorData: unknown): [error: string | null, result: InvestorPayload | null] => {

    const results = InvestorPayloadSchema.safeParse(investorData);

    if (!results.success) {
        return [results.error.issues.reduce((prev, issue,) => (`${prev} ${issue.path[0]} : ${issue.message}`), ""), null];
    }

    return [null, results.data];
}


export const makeHttpRequest = (request: { body: any, pathname: any, method: any, headers: any } | any) => {
    let body = request?.body;
    let pathname = request?.pathname;
    let method = request?.method;
    let headers = request?.headers

    console.log({
        method,
        pathname,
        headers,
        body
    })

    if (!body || !pathname || !method) {
        throw makeHttpError({ statusCode: 400, errorMsg: `Bad request` })
    }

    if (typeof request?.body === 'string') {
        try {
            body = JSON.parse(request?.body);
        } catch (error) {
            throw makeHttpError({ statusCode: 400, errorMsg: `Bad request. Request must have a valid JSON` })
        }
    }

    return Object.freeze({
        method,
        pathname,
        headers,
        body
    });
}


export const makeStaffData = (staffData: Document): StaffData => {
    return StaffDataSchema.parse(staffData);
}

export const makeInvestorData = (investorData: Document): InvestorData => {
    return InvestorDataSchema.parse(investorData);
}


export function makeHttpError({ statusCode, errorMsg }: { statusCode: number, errorMsg: string }) {
    return new HttpError(errorMsg, {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode,
        data: {
            success: false,
            error: errorMsg
        }
    })
}

export const generateOTP = (stumb: string, size: number = 15): string => {
    // Declare a digits variable  
    // which stores all digits  
    let digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';
    let OTP = '';
    const randomNumbers = new Uint32Array(size);
    crypto.getRandomValues(randomNumbers);

    for (let i = 0; i < size; i++) {
        OTP += digits[randomNumbers[i] % digits.length];
    }

    return stumb ?? OTP;
}
