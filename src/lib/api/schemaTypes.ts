import type { components } from "./auto-generated/openApiSchema";

type schemas = components["schemas"];


export type UserInfoResponse = schemas["UserInfoResponse"];
export type UserPermissionsResponse = schemas["UserPermissionsResponse"];

export type UserLoginRequest = schemas["UserLoginRequest"];
export type UserLoginResponse = schemas["UserLoginResponse"];

export type SearchRequest = schemas["SearchRequest"];
export type SearchResponse = schemas["SearchResponse"];
export type SearchedWordMeaning = schemas["SearchedWordMeaning"];

export type EnglishWordInfoResponse = schemas["EnglishWordInfoResponse"];
export type EnglishWord = schemas["EnglishWord"];

export type EnglishWordWithMeanings = schemas["EnglishWordWithMeanings"];
export type EnglishWordMeaningWithDetails = schemas["EnglishWordMeaningWithDetails"];

export type SloveneWord = schemas["SloveneWord"];
export type SloveneTranslation = schemas["SloveneTranslation"];
export type SloveneWordMeaning = schemas["SloveneWordMeaning"];

export type CategoriesResponse = schemas["CategoriesResponse"];
export type Category = schemas["Category"];
