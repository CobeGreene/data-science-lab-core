export interface FileService {
    openFile(filters?: { name: string, extensions: string[] }[]): Promise<Buffer>;
}