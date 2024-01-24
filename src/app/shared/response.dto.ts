export class ModelIdResponse {
    indentifiers?: string[];
    key?: string;
}

export class ApiResponse<T> {  // ApiResponse
    result?: T;
    statusCode?: number;
}

export class ApiOkResponse {  // ApiOkResponse
    statusCode?: number;
    message?: string;
}

export interface ModelKeysResponse {
    keys: string[];
}
