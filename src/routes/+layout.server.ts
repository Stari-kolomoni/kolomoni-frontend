import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({
    cookies,
}) => {
    const accessToken = cookies.get("accessToken");

    return {
        accessToken: typeof accessToken === "undefined" ? null : accessToken
    };
};
