import Staff from '@/database/mongoose/models/Staff';
import { hashPassword } from '@/lib/helpers';
import { StaffData } from '@/types';
import { NextRequest, NextResponse } from 'next/server';


const staffHandler = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const userData: StaffData = body.formData;


        //Todo: payload validation;

        if (!userData?.email || !userData.password) {
            // throw Error http error for bad request body
            throw Error("All fields required")
        }

        // Todo: transform payload
        // check for duplicates
        const user = await Staff.findOne({ email: userData.email.toLocaleLowerCase() });
        if (user) {
            // thow http error for bad request body
            throw Error("Staff already found");
        }

        userData.password = await hashPassword(userData.password);

        await Staff.create(userData);

        return NextResponse.json({ message: "Staff created" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export { staffHandler as POST, staffHandler as GET }