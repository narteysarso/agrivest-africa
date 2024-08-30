import HttpError from '@/lib/errors/http-error';
import InvalidCredentialsError from '@/lib/errors/invalid-credentials';
import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import {  makeHttpError, } from '@/lib/helpers';
import { investorService } from '@/services';
import { InvestorPayload } from '@/types/services/investor.service';
import { NextRequest, NextResponse } from 'next/server';


const staffHandler = async (request: NextRequest) => {
    try {

        const investorInfo: InvestorPayload = await request.json();

        console.log(investorInfo);

        switch (request.method) {
            case 'POST':
                const response = await investorService.register(investorInfo);

                return NextResponse.json({ data: response.data }, { status: response.statusCode });

            default:
                throw makeHttpError({ statusCode: 404, errorMsg: "Not found" });
        }

    } catch (error) {

        if (error instanceof InvalidCredentialsError) {
            return NextResponse.json({ message: error.message, error }, { status: 400 });
        }

        if (error instanceof InvalidPropertyError) {
            return NextResponse.json({ message: error.message, error }, { status: 400 });
        }

        if (error instanceof NotFound) {
            return NextResponse.json({ message: error.message, error }, { status: 404 });
        }

        if (error instanceof HttpError) {
            return NextResponse.json({ message: error.message, error }, { status: error.statusCode });
        }

        console.log(error)

        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export { staffHandler as POST, staffHandler as GET, staffHandler as PUT, staffHandler as DELETE }