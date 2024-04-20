<script lang="ts">
    import { goto } from "$app/navigation";
    import { Api, UserAuthentication } from "$lib/api";
    import { UserInfo } from "$lib/api/userInfo";
    import { Button } from "$lib/components/atoms/button";
    import { Input } from "$lib/components/atoms/input";
    import { Label } from "$lib/components/atoms/label";
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
    <Label for="km-signup-username-input">
        Uporabniško ime
    </Label>
    <Input 
        id="km-signup-username-input"
        type="text"
        name="username"
        bind:value={username}
    />

    <Label for="km-signup-password-input">
        Geslo
    </Label>
    <Input
        id="km-signup-password-input"
        type="password"
        name="password"
        bind:value={password}
    />

    <Button>Prijava</Button>
</form>

<a href="/uporabniski-racun">Pojdi na uporabniški račun</a>
