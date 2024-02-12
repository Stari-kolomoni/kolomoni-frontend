import { ApiSchemaValidationError } from "$lib/errors";
import { UserInformationResponse as userInformationResponseValidator } from "./auto-generated/validation/UserInformationResponse";
import { UserPermissionListResponse as userPermissionListResponseValidator } from "./auto-generated/validation/UserPermissionListResponse";
import { ErrorWithReasonResponse as errorWithReasonResponseValidator } from "./auto-generated/validation/ErrorWithReasonResponse";
import { UserLoginResponse as userLoginResponseValidator } from "./auto-generated/validation/UserLoginResponse";
import type { ErrorWithReasonResponse, UserInformationResponse, UserLoginResponse, UserPermissionListResponse } from "./schemaTypes";

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

export function validateErrorWithReasonResponse(content: unknown): asserts content is ErrorWithReasonResponse {
    if (!errorWithReasonResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeName("ErrorWithReasonResponse");
    }
}
