<script lang="ts">
    import { SeaAndSunIcon } from "@indaco/svelte-iconoir/sea-and-sun";
    import { InfoCircleIcon } from "@indaco/svelte-iconoir/info-circle";
    import type { UserInfo } from "$lib/api/userInfo";
    import { KolomonIcon } from "$lib/components/atoms/icons";
    import { userInfoContext } from "$lib/contexts";
    import type { Writable } from "svelte/store";
    import SidebarItem from "./SidebarItem.svelte";

    const userInfo: Writable<UserInfo | null> = userInfoContext.get();
</script>

{#snippet iskalnikIcon()}
    <SeaAndSunIcon />
{/snippet}

{#snippet aboutIcon()}
    <InfoCircleIcon />
{/snippet}



<div class="km_sidebar_container km_sidebar_kolomoni-container">
    <a href="/" title="Nazaj na glavno stran">
        <KolomonIcon class="km_sidebar_kolomoni-icon" />
    </a>
    <!-- <div class="km_sidebar_kolomoni-title">
        stari kolomoni
    </div> -->
</div>


<div class="km_sidebar_item-list-container">
    <div class="km_sidebar_item-list">
        <SidebarItem label="Iskalnik" icon={iskalnikIcon} path="/" />
    </div>

    <div class="km_sidebar_item-list">
        <SidebarItem label="O projektu" icon={aboutIcon} path="/o-projektu" />
    </div>
</div>
