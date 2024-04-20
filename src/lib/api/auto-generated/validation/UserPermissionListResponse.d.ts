export function UserPermissionListResponse(
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

export namespace UserPermissionListResponse {
    export let errors: Record<string, any>;
}
