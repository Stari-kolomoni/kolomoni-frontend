import { getContext, setContext } from "svelte";
import type { UserLoginState } from "./api";
import type { Writable } from "svelte/store";


const LOGIN_STATE_CONTEXT_NAME = "loginState";

export const loginStateContext = {
    set: (userLoginState: Writable<UserLoginState>) => {
        setContext(LOGIN_STATE_CONTEXT_NAME, userLoginState);
    },
    get: (): Writable<UserLoginState> => {
        return getContext(LOGIN_STATE_CONTEXT_NAME) as Writable<UserLoginState>;
    }
};
