export interface ResponsePayload {
    headers?: object,
    statusCode: number,
    data?: object | string,
    error?: object | string
}