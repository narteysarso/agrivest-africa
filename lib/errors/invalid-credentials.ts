export default class InvalidCredentialsError extends Error {
    constructor(msg: string) {
        super(msg ?? `Credential combination does not match`);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidCredentialsError)
        }
    }
}