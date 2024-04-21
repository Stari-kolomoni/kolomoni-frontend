import { ApiSchemaValidationError } from "$lib/errors";

import { UserInformationResponse as userInformationResponseValidator } from "./auto-generated/validation/UserInformationResponse";
import { UserPermissionListResponse as userPermissionListResponseValidator } from "./auto-generated/validation/UserPermissionListResponse";
import { ErrorWithReasonResponse as errorWithReasonResponseValidator } from "./auto-generated/validation/ErrorWithReasonResponse";
import { UserLoginResponse as userLoginResponseValidator } from "./auto-generated/validation/UserLoginResponse";
import { SearchResponse as searchResponseValidator } from "./auto-generated/validation/SearchResponse";
import { EnglishWordResponse as englishWordResponseValidator } from "./auto-generated/validation/EnglishWordResponse";
import { SloveneWord as sloveneWordValidator } from "./auto-generated/validation/SloveneWord";

import type {
    EnglishWordResponse,
    ErrorWithReasonResponse,
    SearchResponse,
    UserInformationResponse,
    UserLoginResponse,
    UserPermissionListResponse,
    SloveneWord
} from "./schemaTypes";


/***
 * User-related
 */


export function validateUserInformationResponse(content: unknown): asserts content is UserInformationResponse {
    if (!userInformationResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "UserInformationResponse",
            userInformationResponseValidator.errors
        );
    }
}

export function validateUserPermissionListResponse(content: unknown): asserts content is UserPermissionListResponse {
    if (!userPermissionListResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "UserPermissionListResponse",
            userPermissionListResponseValidator.errors,
        );
    }
}

export function validateUserLoginResponse(content: unknown): asserts content is UserLoginResponse {
    if (!userLoginResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "UserLoginResponse",
            userLoginResponseValidator.errors
        );
    }
}



/***
 * General
 */

export function validateErrorWithReasonResponse(content: unknown): asserts content is ErrorWithReasonResponse {
    if (!errorWithReasonResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "ErrorWithReasonResponse",
            errorWithReasonResponseValidator.errors
        );
    }
}



/***
 * Search-related
 */


export function validateSearchResponse(content: unknown): asserts content is SearchResponse {
    if (!searchResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "SearchResponse",
            searchResponseValidator.errors
        );
    }
}



/***
 * English word-related
 */


export function validateEnglishWordResponse(content: unknown): asserts content is EnglishWordResponse {
    if (!englishWordResponseValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "EnglishWordResponse",
            englishWordResponseValidator.errors
        );
    }
}



/***
 * Slovene word-related
 */


export function validateSloveneWord(content: unknown): asserts content is SloveneWord {
    if (!sloveneWordValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "SloveneWord",
            sloveneWordValidator.errors
        );
    }
}
