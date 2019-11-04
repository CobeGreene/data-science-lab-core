

export interface FileService {
    openFile(callback: (buffer: Buffer) => void,
        filters?: { name: string, extensions: string[] }[]): void;
}