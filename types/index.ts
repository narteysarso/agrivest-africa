import { z } from 'zod';
import { StaffPayload } from './services/staff.service';
import mongoose from 'mongoose';
import { InvestorPayload } from './services/investor.service';

export type NavigationItemsType = {
    title: string,
    href: string,
    description: string,
    items?: NavigationItemsType[]
}

export enum StaffStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

export enum StaffRole {
    ADMIN = "admin",
    STAFF = "staff"
}

export interface StaffInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}

export enum InvestorRole {
    INVESTOR = 'investor'
}

export interface InvestorInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

// http types
export interface HttpErrorOption {
    headers: object;
    statusCode: number;
    data: object;
}


/// Util types
export interface PasswordMananger {
    hashPassword(plainText: string): Promise<string>;
    verfiyPassword(plainText: string, cypher: string): Promise<boolean>
}

export enum AuthType {
    STAFF = "staff",
    INVESTOR = "investor"
}

export enum FarmType {
    MAIZE = "maize",
    RICE = "rice"
}

/// Database types

export interface IRepositoryDependency {
    passwordManager: PasswordMananger,
}

export interface IRepository {
    create(input: Partial<StaffPayload | InvestorPayload>): Promise<mongoose.Document>;
    find(query: any): Promise<any>;
    update(query: any, updatedata: StaffPayload | InvestorPayload): Promise<mongoose.Document | null>
    login({ email, password }: { email: string, password: string }): Promise<boolean>
    deleteAll(): Promise<any>;
}

export type RepositoryFactory = (dependencies: IRepositoryDependency, repository: string) => IRepository;

export type DatabaseProviderName = "mongoose" | "postgres";
