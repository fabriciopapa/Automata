export declare class Headers {

    _headersMap: Map<string, string[]>;
    constructor(headers?: Headers | {
        [key: string]: any;
    });

    static fromResponseHeaderString(headersString: string): Headers;

    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(fn: (values: string[], name: string, headers: Map<string, string[]>) => void): void;
    get(header: string): string;
    has(header: string): boolean;
    keys(): string[];
    set(header: string, value: string | string[]): void;
    values(): string[][];
    toJSON(): {
        [key: string]: any;
    };
    getAll(header: string): string[];
    entries(): void;
}