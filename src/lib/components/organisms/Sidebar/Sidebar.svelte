<script lang="ts">
    import type { UserInfo } from "$lib/api/userInfo";
    import { KolomonIcon } from "$lib/components/atoms/icons";
    import { userInfoContext } from "$lib/contexts";
    import type { Writable } from "svelte/store";

    const userInfo: Writable<UserInfo | null> = userInfoContext.get();
</script>

<div class="km_sidebar_container km_sidebar_kolomoni-container">
    <KolomonIcon class="km_sidebar_kolomoni-icon"></KolomonIcon>
    <div class="km_sidebar_kolomoni-title">
        stari kolomoni
    </div>
</div>



<div class="km_sidebar_item-list">
    <a
        class="km_sidebar_container km_sidebar_item"
        href="/"
    >
        Domov
    </a>

    {#if $userInfo !== null}
        <a
            class="km_sidebar_container km_sidebar_item"
            href="/uporabniski-racun"
        >
            {$userInfo.displayName}
        </a>
    {:else}
        <a
            class="km_sidebar_container km_sidebar_item"
            href="/prijava"
        >
            Prijava
        </a>
    {/if}


</div>

