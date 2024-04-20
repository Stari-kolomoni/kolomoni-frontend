<script lang="ts">
    import type { UserInfo } from "$lib/api/userInfo";
    import { userInfoContext } from "$lib/contexts";
    import type { Writable } from "svelte/store";

    const userInfo: Writable<UserInfo | null> = userInfoContext.get();
</script>

<div class="km_sidebar">
    {#if $userInfo !== null}
        <a href="/uporabniski-racun">{$userInfo.displayName}</a>
    {:else}
        <a href="/prijava">Prijava</a>
    {/if}
    <div>

    </div>

    <a href="/">Domov</a>
</div>
