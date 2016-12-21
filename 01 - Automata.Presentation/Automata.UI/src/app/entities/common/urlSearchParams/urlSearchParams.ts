export declare class URLSearchParams {
    rawParams: string;
    paramsMap: Map<string, string[]>;
    constructor(rawParams?: string);
    clone(): URLSearchParams;
    has(param: string): boolean;
    get(param: string): string;
    getAll(param: string): string[];
    set(param: string, val: string): void;
    setAll(searchParams: URLSearchParams): void;
    append(param: string, val: string): void;
    appendAll(searchParams: URLSearchParams): void;
    replaceAll(searchParams: URLSearchParams): void;
    toString(): string;
    delete(param: string): void;
}