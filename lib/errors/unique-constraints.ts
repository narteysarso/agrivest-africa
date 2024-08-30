export default class UniqueConstraints extends Error {
    constructor(value: string | number){
        super(`${value} must be unique`);
        
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UniqueConstraints)
        }
    }

}