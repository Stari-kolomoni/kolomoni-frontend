import type { components, paths } from "./auto-generated/openApiSchema";

export type UserInformationResponse = paths["/users/me"]["get"]["responses"]["200"]["content"]["application/json"];
export type UserPermissionListResponse = paths["/users/me/permissions"]["get"]["responses"]["200"]["content"]["application/json"];

export type UserLoginRequest = paths["/login"]["post"]["requestBody"]["content"]["application/json"];
export type UserLoginResponse = paths["/login"]["post"]["responses"]["200"]["content"]["application/json"];

export type ErrorWithReasonResponse = components["schemas"]["ErrorReasonResponse"];

export type SearchRequest = paths["/dictionary/search"]["get"]["requestBody"]["content"]["application/json"];
export type SearchResponse = paths["/dictionary/search"]["get"]["responses"]["200"]["content"]["application/json"];

export type EnglishWordResponse = paths["/dictionary/english/{word_uuid}"]["get"]["responses"]["200"]["content"]["application/json"];
export type EnglishWord = components["schemas"]["EnglishWord"];

export type SloveneWord = components["schemas"]["SloveneWord"];
