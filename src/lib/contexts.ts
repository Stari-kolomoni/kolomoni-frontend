import { getContext, setContext } from "svelte";
import type { UserAuthentication } from "./api";
import type { Writable } from "svelte/store";
import type { UserInfo } from "./api/userInfo";


const USER_AUTHENTICATION_CONTEXT_NAME = "userAuthentication";
export const userAuthenticationContext = {
    setup: (userAuthenticationStore: Writable<UserAuthentication>) => {
        setContext(USER_AUTHENTICATION_CONTEXT_NAME, userAuthenticationStore);
    },
    get: (): Writable<UserAuthentication> => {
        return getContext(USER_AUTHENTICATION_CONTEXT_NAME) as Writable<UserAuthentication>;
    }
};


const USER_INFO_CONTEXT_NAME = "userInfo";
export const userInfoContext = {
    setup: (userInfoStore: Writable<UserInfo | null>) => {
        setContext(USER_INFO_CONTEXT_NAME, userInfoStore);
    },
    get: (): Writable<UserInfo | null> => {
        return getContext(USER_INFO_CONTEXT_NAME) as Writable<UserInfo | null>;
    }
};
