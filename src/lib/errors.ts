export class KolomoniError extends Error {
    constructor(message: string, cause?: unknown) {
        super(message, { cause });
        this.name = "KolomoniError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class ApiError extends KolomoniError {
    constructor(message: string, cause?: unknown) {
        super(message, cause);
        this.name = "ApiError";
    }
}

export class StatusCodeError extends ApiError {
    public readonly statusCode: number;
    public readonly statusText: string;

    constructor(statusCode: number, statusText: string) {
        super(`Received non-successful HTTP status code: ${statusCode} ${statusText}`);
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
}

export class MissingAuthenticationError extends ApiError {
    constructor() {
        super("Can't perform API request, user is not logged in.");
    }
}

export class ApiSchemaValidationError extends ApiError {
    constructor(message: string) {
        super(message);
        this.name = "ApiSchemaValidationError";
    }

    public static fromTypeName(typeName: string): ApiSchemaValidationError {
        return new ApiSchemaValidationError(`Failed to validate API type ${typeName}.`);
    }

    public static fromTypeNameAndReason(
        typeName: string,
        errorReason: Record<string, unknown>,
    ): ApiSchemaValidationError {
        return new ApiSchemaValidationError(
            `Failed to validate API type ${typeName}. Reason: ${JSON.stringify(errorReason)}.`
        );
    }
}
