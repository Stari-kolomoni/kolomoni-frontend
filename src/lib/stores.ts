import { writable, type Writable } from "svelte/store";
import { UserAuthentication } from "./api";
import type { UserInfo } from "./api/userInfo";

export function createUserAuthenticationStore(userAuthentication: UserAuthentication): Writable<UserAuthentication> {
    return writable(userAuthentication);
}

export function createUserInfoStore(userInfo: UserInfo | null): Writable<UserInfo | null> {
    return writable(userInfo);
}
