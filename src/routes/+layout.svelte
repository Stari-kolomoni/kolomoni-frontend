<script lang="ts">
    import { writable } from "svelte/store";
    import type { LayoutData } from "./$types";
    import { UserLoginState } from "$lib/api";
    import { loginStateContext } from "$lib/contexts";

    export let data: LayoutData;

    const writableLoginStateStore = writable(new UserLoginState(data.accessToken));
    loginStateContext.set(writableLoginStateStore);
</script>

<header>
    <a href="/">Domov</a>
    <a href="/prijava">Prijava</a>
    <a href="/uporabniski-racun">Uporabniški račun</a>
</header>

<slot></slot>
