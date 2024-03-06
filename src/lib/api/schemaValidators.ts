import { ApiSchemaValidationError } from "$lib/errors";

import { UserInformationResponse as userInformationResponseValidator } from "./auto-generated/validation/UserInformationResponse";
import { UserPermissionListResponse as userPermissionListResponseValidator } from "./auto-generated/validation/UserPermissionListResponse";
import { ErrorWithReasonResponse as errorWithReasonResponseValidator } from "./auto-generated/validation/ErrorWithReasonResponse";
import { UserLoginResponse as userLoginResponseValidator } from "./auto-generated/validation/UserLoginResponse";
import { SearchResponse as searchResponseValidator } from "./auto-generated/validation/SearchResponse";

import type { ErrorWithReasonResponse, SearchResponse, UserInformationResponse, UserLoginResponse, UserPermissionListResponse } from "./schemaTypes";


/***
 * User-related
 */


export function validateUserInformationResponse(content: unknown): asserts content is UserInformationResponse {
    if (!userInformationResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeName("UserInformationResponse");
    }
}

export function validateUserPermissionListResponse(content: unknown): asserts content is UserPermissionListResponse {
    if (!userPermissionListResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeName("UserPermissionListResponse");
    }
}

export function validateUserLoginResponse(content: unknown): asserts content is UserLoginResponse {
    if (!userLoginResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeName("UserLoginResponse");
    }
}



/***
 * General
 */

export function validateErrorWithReasonResponse(content: unknown): asserts content is ErrorWithReasonResponse {
    if (!errorWithReasonResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeName("ErrorWithReasonResponse");
    }
}



/***
 * Search-related
 */


export function validateSearchResponse(content: unknown): asserts content is SearchResponse {
    if (!searchResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason("SearchResponse", JSON.stringify(searchResponseValidator.errors));
    }
}
