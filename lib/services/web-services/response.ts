export class Response {
    statusCode: number;
    body?: Buffer;

    constructor(response: {statusCode: number, body?: Buffer}) {
        this.statusCode = response.statusCode;
        this.body = response.body;
    }
}