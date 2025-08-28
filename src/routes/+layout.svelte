<script lang="ts">
    import type { LayoutData } from "./$types";
    import { UserAuthentication } from "$lib/api";
    import { userAuthenticationContext, userInfoContext } from "$lib/contexts";
    import { UserInfo } from "$lib/api/userInfo";
    import { createUserAuthenticationStore, createUserInfoStore } from "$lib/stores";
    import { Shell } from "$lib/components/organisms/shell";
    import { Sidebar } from "$lib/components/organisms/sidebar";

    interface Props {
        data: LayoutData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();


    // Initialize user authentication store and context.
    const userAuthenticationStore = createUserAuthenticationStore(new UserAuthentication(data.accessToken));
    userAuthenticationContext.setup(userAuthenticationStore);


    // Initialize user information store and context.
    if (data.userInfo !== null) {
        // TODO What happens when the token is no longer valid?
        const userInfoStore = createUserInfoStore(UserInfo.fromApiResponse(data.userInfo));
        userInfoContext.setup(userInfoStore);
    } else {
        userInfoContext.setup(createUserInfoStore(null));
    }

</script>

<script lang="ts" module>
    import "$lib/style/global-styles.scss";
</script>

{#snippet sidebar()}
    <Sidebar />
{/snippet}

<Shell {sidebar} sidebarClasses="km_sidebar">
    {@render children?.()}
</Shell>
