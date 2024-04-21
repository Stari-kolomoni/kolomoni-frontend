export function SloveneWord(
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

export namespace SloveneWord {
    export let errors: Record<string, any>;
}
