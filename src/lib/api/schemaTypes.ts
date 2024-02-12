import type { components, paths } from "./auto-generated/openApiSchema";

export type UserInformationResponse = paths["/users/me"]["get"]["responses"]["200"]["content"]["application/json"];
export type UserPermissionListResponse = paths["/users/me/permissions"]["get"]["responses"]["200"]["content"]["application/json"];

export type UserLoginRequest = paths["/login"]["post"]["requestBody"]["content"]["application/json"];
export type UserLoginResponse = paths["/login"]["post"]["responses"]["200"]["content"]["application/json"];

export type ErrorWithReasonResponse = components["schemas"]["ErrorReasonResponse"];
