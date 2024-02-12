<script lang="ts">
    import { AmbientApiParameters, Api } from "$lib/api";
    import { loginStateContext } from "$lib/contexts";
    import Logger, { CommonColors } from "$lib/logger";
    import { get } from "svelte/store";

    const log = new Logger("login", CommonColors.CADMIUM_ORANGE);


    let username: string;
    let password: string;

    const loginStateStore = loginStateContext.get();

    async function onLoginFormSubmit(
        event: { currentTarget: EventTarget & HTMLFormElement }
    ) {
        log.info("User is submitting login form!");

        const loginState = get(loginStateStore);

        const loginResponse = await Api.loginUser(
            AmbientApiParameters.native(),
            loginState,
            username,
            password
        );


        document.cookie 
            = `accessToken=${loginResponse.access_token}; max-age=86400; SameSite=strict; Secure`;

        loginStateStore.update(
            (store) => store.withUpdatedAccessToken(loginResponse.access_token)
        );


        log.info("User is logged in!");
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
