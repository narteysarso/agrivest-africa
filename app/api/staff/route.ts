import Staff from '@/database/mongoose/models/Staff';
import HttpError from '@/lib/errors/http-error';
import InvalidCredentialsError from '@/lib/errors/invalid-credentials';
import InvalidPropertyError from '@/lib/errors/invalid-property-error';
import NotFound from '@/lib/errors/not-found';
import { hashPassword, makeHttpError, } from '@/lib/helpers';
import { userService } from '@/services';
import { StaffPayload } from '@/types/services/staff.service';
import { NextRequest, NextResponse } from 'next/server';


const staffHandler = async (request: NextRequest) => {
    try {

        const staffInfo: StaffPayload = await request.json();

        console.log(staffInfo);

        switch (request.method) {
            case 'POST':
                const response = await userService.createStaff(staffInfo);

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