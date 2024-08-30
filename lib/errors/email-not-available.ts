export default class EmailNotAvaliable extends Error {
    constructor(value: string | number) {
        super(`${value} is already in use`);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmailNotAvaliable)
        }
    }

}