import HttpError from '@/lib/errors/http-error';
import InvalidCredentialsError from '@/lib/errors/invalid-credentials';
import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import { makeHttpError, } from '@/lib/helpers';
import { farmService } from '@/services';
import { FarmPayload } from '@/types/services/farm.service';
import { NextRequest, NextResponse } from 'next/server';


const farmHandler = async (request: NextRequest) => {
    try {

        const farmInfo: FarmPayload = await request.json();

        switch (request.method) {
            case 'POST':
                const response = await farmService.create(farmInfo);

                if (!response) throw Error("Failed to create farm. Contact server master");


                return NextResponse.json({ success: true }, { status: 201 });

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

        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export { farmHandler as POST, farmHandler as GET, farmHandler as PUT, farmHandler as DELETE }