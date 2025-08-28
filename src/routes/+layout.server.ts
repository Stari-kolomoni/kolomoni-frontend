import { Api } from "$lib/api";
import type { Category } from "$lib/api/schemaTypes";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({
    cookies,
    fetch
}) => {
    const accessToken = cookies.get("accessToken");

    const api = Api.newUsingSvelteFetchWithoutAuthentication(fetch);
    const categories: Category[] = (await api.getAllWordMeaningCategories()).categories;

    const categoriesByKey: Record<string, Category> = {};
    for (const category of categories) {
        categoriesByKey[category.id] = category;
    }


    return {
        accessToken: typeof accessToken === "undefined" ? null : accessToken,
        availableCategories: categoriesByKey
    };
};
