import { HttpErrorOption } from '@/types';

export default class HttpError extends Error {
    headers: HttpErrorOption["headers"];
    statusCode: HttpErrorOption["statusCode"];
    data: HttpErrorOption["data"];
    constructor(msg: string, options: HttpErrorOption) {
        super(msg);
        this.headers = options.headers;
        this.statusCode = options.statusCode;
        this.data = options.data;


        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError)
        }
    }
}