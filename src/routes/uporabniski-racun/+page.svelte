<script lang="ts">
    import { userAuthenticationContext, userInfoContext } from "$lib/contexts";
    import { UserAuthentication } from "$lib/api";
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import { UserInfo } from "$lib/api/userInfo";

    export let data: PageData;

    const loginState = userAuthenticationContext.get();
    const userInfo = userInfoContext.get();


    async function signOutUser(): Promise<void> {
        document.cookie = "accessToken=;Max-Age=0";
        loginState.set(UserAuthentication.newWithoutAuthentication());

        userInfo.set(null);

        console.log("Logged out user!");
        await goto("/prijava");
    }

    onMount(() => {
        const userInfoInstance = UserInfo.fromSerialized(data.userInfo);
        userInfo.set(userInfoInstance);
    });
</script>

<div>Uporabniško ime: {$userInfo?.username}</div>
<div>Prikazano ime: {$userInfo?.displayName}</div>
<div>Datum in čas registracije: {$userInfo?.joinedAt}</div>

<button on:click={signOutUser}>Odjava</button>
