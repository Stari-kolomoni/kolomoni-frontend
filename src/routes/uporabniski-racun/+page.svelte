<script lang="ts">
    import { loginStateContext } from "$lib/contexts";
    import { get } from "svelte/store";
    import { AmbientApiParameters, Api } from "$lib/api";

    const loginStateStore = loginStateContext.get();

    async function retrieveUserInfo() {
        const ambientApiParameters = AmbientApiParameters.native();
        const loginState = get(loginStateStore);

        const userInfo = await Api.getCurrentUserInformation(
            ambientApiParameters,
            loginState
        );

        return userInfo;
    }

    async function signOutUser() {
        document.cookie = "accessToken=;Max-Age=0";

        loginStateStore.update(
            (store) => store.withUpdatedAccessToken(null)
        );

        console.log("Logged out user!");
    }
</script>

{#await retrieveUserInfo()}
    Izvajam zahtevek...
{:then userInfo} 
    <div>Uporabniško ime: {userInfo.user.username}</div>
    <div>Prikazano ime: {userInfo.user.display_name}</div>
    <div>Datum in čas registracije: {userInfo.user.joined_at}</div>

    <button on:click={signOutUser}>Odjava</button>
{:catch error}
    Prišlo je do napake: {error}
{/await}
