export default class NotFound extends Error {
    constructor(msg: string){
        super(msg);
        
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFound)
        }
    }

}