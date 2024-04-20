export function ErrorWithReasonResponse(
    data: any,
    {
        instancePath,
        parentData,
        parentDataProperty,
        rootData
    }?: {
        instancePath?: string;
        parentData: any;
        parentDataProperty: any;
        rootData?: any;
    }
): boolean;

export namespace ErrorWithReasonResponse {
    export let errors: Record<string, any>;
}
