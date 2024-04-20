<script lang="ts">
    import { goto } from "$app/navigation";
    import { Api, UserAuthentication } from "$lib/api";
    import { UserInfo } from "$lib/api/userInfo";
    import { userAuthenticationContext, userInfoContext } from "$lib/contexts";
    import Logger, { CommonColors } from "$lib/logger";
    import { get } from "svelte/store";

    const log = new Logger("login", CommonColors.CADMIUM_ORANGE);

    const loginStateStore = userAuthenticationContext.get();
    const userInfoStore = userInfoContext.get();



    let username: string;
    let password: string;


    async function onLoginFormSubmit(
        event: { currentTarget: EventTarget & HTMLFormElement }
    ) {
        log.info("User is submitting login form!");

        const loginState = get(loginStateStore);
        let api = Api.newUsingNativeFetch(loginState);

        const loginResponse = await api.loginUser(username, password);


        document.cookie 
            = `accessToken=${loginResponse.access_token}; max-age=86400; SameSite=strict; Secure`;

        loginStateStore.update(
            (store) => store.usingUpdatedAccessToken(loginResponse.access_token)
        );

        api = Api.newUsingNativeFetch(UserAuthentication.newWithAuthentication(loginResponse.access_token));
        const userInfo = await api.getCurrentUserInformation();

        userInfoStore.set(UserInfo.fromApiResponse(userInfo));


        log.info(`User ${userInfo.user.username} is logged in!`);

        await goto("/");
    }
</script>


<form on:submit|preventDefault={onLoginFormSubmit}>
    <label>
        Uporabniško ime
        <input
            type="text"
            name="username"
            id="username"
            bind:value={username}
        >
    </label>
    <label>
        Geslo
        <input
            type="text"
            name="password"
            id="password"
            bind:value={password}
        >
    </label>
    <button>Prijava</button>
</form>

<a href="/uporabniski-racun">Pojdi na uporabniški račun</a>
