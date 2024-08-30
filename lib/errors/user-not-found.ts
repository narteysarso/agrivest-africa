export default class UserNotFound extends Error {
    constructor(msg: string) {
        super(msg ?? `User is not found`);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UserNotFound)
        }
    }

}