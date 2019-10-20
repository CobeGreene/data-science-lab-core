export class Request {
    public method: string;
    public protocol: string;
    public hostname: string;
    public port: number;
    public path: string;

    constructor(request: {method: string, protocol: string, hostname: string, port: number, path: string}) {
        this.method = request.method;
        this.protocol = request.protocol;
        this.hostname = request.hostname;
        this.port = request.port;
        this.path = request.path;
    }
}
