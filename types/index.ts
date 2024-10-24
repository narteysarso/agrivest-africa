import { z } from 'zod';
import { StaffPayload } from './services/staff.service';
import mongoose from 'mongoose';
import { InvestorPayload } from './services/investor.service';
import { FarmPayload } from './services/farm.service';
import { Session } from 'next-auth';

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


/// Database types

export interface IRepositoryDependency {
    passwordManager: PasswordMananger,
}

export interface IFarmRespository {
    create(input: FarmPayload): Promise<mongoose.Document>;
    find(query: any): Promise<any>;
    findAll(): Promise<mongoose.Document[]>;
    findById(id: FarmPayload["id"]): Promise<mongoose.Document | null>;
    update(query: any, updatedata: FarmPayload): Promise<mongoose.Document | null>
    deleteAll(): Promise<any>;
}
export interface IAuthRepository {
    login({ email, password }: { email: string, password: string }): Promise<boolean>
}
export interface IStaffRepository extends IAuthRepository {
    create(input: Partial<StaffPayload | InvestorPayload>): Promise<mongoose.Document>;
    find(query: any): Promise<any>;
    update(query: any, updatedata: StaffPayload | InvestorPayload): Promise<mongoose.Document | null>
    deleteAll(): Promise<any>;
}
export interface IInventionRepository extends IAuthRepository {
    create(input: Partial<StaffPayload | InvestorPayload>): Promise<mongoose.Document>;
    find(query: any): Promise<any>;
    update(query: any, updatedata: StaffPayload | InvestorPayload): Promise<mongoose.Document | null>
    deleteAll(): Promise<any>;
}


export enum FarmType {
    CROP = 'crop',
    LIVESTOCK = 'livestock'
}

export enum FarmStatus {
    AVAILABLE = "Available",
    SOLD_OUT = "Sold Out"
}

export interface FarmCardProps {
    id: string,
    img?: string,
    arr?: number,
    location?: string,
    currency?: string,
    priority?: number,
    rosMax?: number,
    rosMin?: number,
    title?: string,
    description?: string,
    cost?: number,
    tags?: string[],
    status: boolean,
    type: FarmType,
    season?: { start: number, end: number }
}


export type IRepository = IStaffRepository | IInventionRepository | IFarmRespository;

export type RepositoryFactory = (repository: string, dependencies?: IRepositoryDependency) => IRepository;

export type DatabaseProviderName = "mongoose" | "postgres";
