export function EnglishWordResponse(
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

export namespace EnglishWordResponse {
    export let errors: Record<string, any>;
}
