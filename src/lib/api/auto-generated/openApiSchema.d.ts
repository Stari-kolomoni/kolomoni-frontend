export interface paths {
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login
         * @description This endpoint is the login method: it validates the credentials (username and password) and
         *     gives the user an access token they can use in future requests to authenticate themselves.
         *
         *     In addition to the access token, a refresh token is provided to the user so they can request
         *     a new access token when it expires. The refresh token is valid for longer than the access token,
         *     but only the access token can be used in the *Authorization* header.
         *
         *     For login refreshing, see the `POST /api/v1/login/refresh` endpoint.
         */
        post: operations["login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh a login
         * @description The user must provide a refresh token given to them on an initial call to `/users/login`.
         *     "Refreshing a login" does not invalidate the refresh token.
         *
         *     The result of this is essentially a new JWT access token. Use when your initial access token
         *     from `/users/login` expires.
         */
        post: operations["refresh_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register a new user
         * @description This endpoint registers a new user with the provided username, display name and password.
         *
         *     Both the username and the display name must be unique across all users,
         *     i.e. no two users can share the same username or display name.
         *
         *     # Authentication
         *     This endpoint does not require authentication.
         */
        post: operations["register_user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all word categories
         * @description This endpoint will list all word categories.
         *
         *     # Authentication
         *     This endpoint does not require authentication.
         *     It technically does require the "category:read" permission,
         *     but that permission is granted to all unauthenticated API callers.
         */
        get: operations["get_all_categories"];
        put?: never;
        /**
         * Create a new category
         * @description This endpoint will create a new word category.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `category:create` permission.
         */
        post: operations["create_category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/category/{category_uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get category
         * @description This endpoint will return information about a single category.
         *
         *     # Authentication
         *     This endpoint does not require authentication.
         */
        get: operations["get_specific_category"];
        put?: never;
        post?: never;
        /**
         * Delete category
         * @description This endpoint allows a user with enough permissions to delete a category.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `category:delete` permission.
         */
        delete: operations["delete_specific_category"];
        options?: never;
        head?: never;
        /**
         * Update category
         * @description This endpoint allows a user with enough permissions to update a category.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `category:update` permission.
         */
        patch: operations["update_specific_category"];
        trace?: never;
    };
    "/dictionary/english/words": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all english words
         * @description This endpoint returns a list of all english words.
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_all_english_words"];
        put?: never;
        /**
         * Create an english word
         * @description This endpoint creates a new english word in the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:create` permission.
         */
        post: operations["create_english_word"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/english/words/{english_word_id}/meanings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all word meanings for a given english word
         * @description This endpoint returns a list of all word meanings
         *     that the specified english word has.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is not** required.
         *     - The caller must have the `word:read` permission, which is currently
         *     blanket-granted to both unauthenticated and authenticated users.
         */
        get: operations["get_all_english_word_meanings"];
        put?: never;
        /**
         * Create a new english word meaning
         * @description This endpoint creates a new english word meaning with
         *     the given disambiguation, abbreviation, and description.
         *
         *     Just to clarify: word meanings are *always* linked
         *     to specified words, and cannot exist by themselves.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        post: operations["create_english_word_meaning"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/english/words/{english_word_id}/meanings/{english_word_meaning_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete an english word meaning
         * @description This endpoint deletes an english word meaning.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        delete: operations["delete_english_word_meaning"];
        options?: never;
        head?: never;
        /**
         * Modifies an english word meaning
         * @description This endpoint modifies an english word meaning.
         *
         *
         *     # Double option
         *     Note the use of double options - leaving a field undefined
         *     semantically means "leave it alone", while setting it to `null`
         *     semantically means "clear the field".
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        patch: operations["update_english_word_meaning"];
        trace?: never;
    };
    "/dictionary/english/words/{english_word_id}/meanings/{english_word_meaning_id}/categories/{category_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Link a category to an english word meaning
         * @description This endpoints links a category to an english word meaning.
         *     A single meaning can have zero or more categories it belongs to.
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        post: operations["link_category_to_english_word_meaning"];
        /**
         * Unlink a category from an english word meaning
         * @description This endpoint unlinks a category from an english word meaning.
         *     A single meaning can have zero or more categories it belongs to.
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        delete: operations["unlink_category_from_english_word_meaning"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/english/words/{word_uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an english word
         * @description This endpoint returns information about a single english word from the dictionary.
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_english_word_by_id"];
        put?: never;
        post?: never;
        /**
         * Delete an english word
         * @description This endpoint deletes an english word from the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:delete` permission.
         */
        delete: operations["delete_english_word"];
        options?: never;
        head?: never;
        /**
         * Update an english word
         * @description This endpoint updates an existing english word in the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:update` permission.
         */
        patch: operations["update_english_word"];
        trace?: never;
    };
    "/dictionary/english/words/by-lemma/{word_lemma}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find an english word by lemma
         * @description This endpoint returns information about a single english word from the dictionary,
         *     but takes a lemma as a parameter instead of the word ID.
         *
         *     Note that this is *not* intended as a search endpoint!
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_english_word_by_lemma"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search the dictionary
         * @description This endpoint performs a fuzzy search across the entire dictionary
         *     and returns a list of english and slovene word results.
         *
         *     # Authentication
         *     Authentication is not required on this endpoint.
         */
        post: operations["perform_search"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/slovene/words": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all slovene words
         * @description This endpoint returns a list of all slovene words.
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_all_slovene_words"];
        put?: never;
        /**
         * Create a slovene word
         * @description This endpoint creates a new slovene word in the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:create` permission.
         */
        post: operations["create_slovene_word"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/slovene/words/{slovene_word_id}/meanings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all word meanings for a given slovene word
         * @description This endpoint returns a list of all word meanings
         *     that the specified slovene word has.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is not** required.
         *     - The caller must have the `word:read` permission, which is currently
         *     blanket-granted to both unauthenticated and authenticated users.
         */
        get: operations["get_all_slovene_word_meanings"];
        put?: never;
        /**
         * Create a new slovene word meaning
         * @description This endpoint creates a new slovene word meaning with
         *     the given disambiguation, abbreviation, and description.
         *
         *     Just to clarify: word meanings are *always* linked
         *     to specified words, and cannot exist by themselves.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        post: operations["create_slovene_word_meaning"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/slovene/words/{slovene_word_id}/meanings/{slovene_word_meaning_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a slovene word meaning
         * @description This endpoint deletes a slovene word meaning.
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        delete: operations["delete_slovene_word_meaning"];
        options?: never;
        head?: never;
        /**
         * Modifies a slovene word meaning
         * @description This endpoint modifies a slovene word meaning.
         *
         *
         *     # Double option
         *     Note the use of double options - leaving a field undefined
         *     semantically means "leave it alone", while setting it to `null`
         *     semantically means "clear the field".
         *
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        patch: operations["update_slovene_word_meaning"];
        trace?: never;
    };
    "/dictionary/slovene/words/{slovene_word_id}/meanings/{slovene_word_meaning_id}/categories/{category_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Link a category to a slovene word meaning
         * @description This endpoints links a category to a slovene word meaning.
         *     A single meaning can have zero or more categories it belongs to.
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        post: operations["link_category_to_slovene_word_meaning"];
        /**
         * Unlink a category from a slovene word meaning
         * @description This endpoint unlinks a category from a slovene word meaning.
         *     A single meaning can have zero or more categories it belongs to.
         *
         *     # Authentication & Required permissions
         *     - Authentication **is** required.
         *     - The caller must have the `word:update` permission.
         */
        delete: operations["unlink_category_from_slovene_word_meaning"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/slovene/words/{word_uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a slovene word
         * @description This endpoint returns information about a single slovene word from the dictionary.
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_slovene_word_by_id"];
        put?: never;
        post?: never;
        /**
         * Delete a slovene word
         * @description This endpoint deletes a slovene word from the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:delete` permission.
         */
        delete: operations["delete_slovene_word"];
        options?: never;
        head?: never;
        /**
         * Update a slovene word
         * @description This endpoint updates an existing slovene word in the dictionary.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word:update` permission.
         */
        patch: operations["update_slovene_word"];
        trace?: never;
    };
    "/dictionary/slovene/words/by-lemma/{word_lemma}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fina a slovene word by lemma
         * @description This endpoint returns information about a single slovene word from the dictionary,
         *     but takes a lemma as a parameter instead of the word ID.
         *
         *     Note that this is *not* intended as a search endpoint!
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `word:read` permission to unauthenticated users.
         */
        get: operations["get_slovene_word_by_lemma"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dictionary/translations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new translation relationship
         * @description This endpoint will create a new translation relationship
         *     between an english and a slovene word. Note that this is different than
         *     a *translation suggestion*.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word.translation:create` permission.
         */
        post: operations["create_translation"];
        /**
         * Delete a translation
         * @description This endpoint will remove a translation relationship
         *     between an english and a slovene word. Note that this is different than
         *     a *translation suggestion*.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `word.translation:delete` permission.
         */
        delete: operations["delete_translation"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Ping the server. */
        get: operations["ping"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all registered users.
         * @description This endpoint returns a list of all registered users.
         *
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.any:read` permission.
         */
        get: operations["get_all_registered_users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user's information
         * @description This is an expanded version of the `GET /users/me` endpoint,
         *     allowing you to see information about users other than yourself.
         *
         *     # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `users.any:read` permission to unauthenticated users.
         */
        get: operations["get_specific_user_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/display_name": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a user's display name
         * @description This is generic version of the `PATCH /users/me/display_name` endpoint,
         *     allowing a user with enough permissions to modify another user's display name.
         *
         *     # Restrictions
         *     You can not modify your own roles on this endpoint.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.any:write` permission.
         */
        patch: operations["update_specific_user_display_name"];
        trace?: never;
    };
    "/users/{user_id}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user's effective permissions
         * @description Returns a list of effective permissions.
         *     The effective permission list depends on permissions that each of the user's roles provide.
         *
         *     This is a generic version of the `GET /users/me/permissions` endpoint,
         *     allowing you to see others' permissions.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.any:read` permission.
         */
        get: operations["get_specific_user_effective_permissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user's roles
         * @description # Authentication
         *     Authentication is *not required* on this endpoint due to a blanket grant of
         *     the `users.any:read` permission to unauthenticated users.
         */
        get: operations["get_specific_user_roles"];
        put?: never;
        /**
         * Add roles to a user
         * @description This endpoint allows a user with enough permissions to add roles to another user.
         *
         *     # Restrictions
         *     You can not modify your own roles on this endpoint.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.any:write` permission.
         *     Additionally, you can not give out a role you do not have yourself – trying to do
         *     so will fail with `403 Forbidden`.
         */
        post: operations["add_roles_to_specific_user"];
        /**
         * Removes roles from a user
         * @description This endpoint allows a user with enough permission to remove roles from another user.
         *
         *     # Restrictions
         *     You can not modify your own roles on this endpoint.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.any:write` permission.
         *     Additionally, you can not remove a role you do not have yourself – trying to do
         *     so will fail with `403 Forbidden`.
         */
        delete: operations["remove_roles_from_specific_user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get your user information
         * @description This endpoint returns the logged-in user's information.
         *
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.self:read` permission.
         */
        get: operations["get_current_user_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/me/display_name": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Change your display name
         * @description This endpoint allows you to change your own display name. Note that the display name
         *     must be unique among all users, so your request may be denied with a `409 Conflict`
         *     to indicate a display name collision.
         *
         *     # Authentication
         *     This endpoint requires the `users.self:write` permission.
         */
        patch: operations["update_current_user_display_name"];
        trace?: never;
    };
    "/users/me/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get your effective permissions
         * @description This endpoint returns the logged-in user's effective permission list.
         *     The effective permission list depends on permissions that each of the user's roles provide.
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.self:read` permission.
         */
        get: operations["get_current_user_effective_permissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/me/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get your roles
         * @description This endpoint returns the logged-in user's role list.
         *
         *
         *     # Authentication
         *     This endpoint requires authentication and the `users.self:read` permission.
         */
        get: operations["get_current_user_roles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CategoriesResponse: {
            categories: components["schemas"]["Category"][];
        };
        Category: {
            /** Format: date-time */
            created_at: string;
            english_name: string;
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            last_modified_at: string;
            parent_category_id: string[];
            slovene_name: string;
        };
        /** @example {
         *       "english_name": "Activities and Combat",
         *       "slovene_name": "Dejavnosti in spopad"
         *     } */
        CategoryCreationRequest: {
            english_name: string;
            /** Format: uuid */
            parent_category_id?: string | null;
            slovene_name: string;
        };
        /** @example {
         *       "category": {
         *         "created_at": "2023-06-27T20:34:27.217273Z",
         *         "english_name": "Activities and Combat",
         *         "id": 1,
         *         "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *         "slovene_name": "Dejavnosti in spopad"
         *       }
         *     } */
        CategoryCreationResponse: {
            category: components["schemas"]["Category"];
        };
        /** @description Pertains to all endpoints under `/dictionary/category`. */
        CategoryErrorReason: {
            /** @enum {string} */
            "category-error-type": "category-not-found";
        } | {
            /** @enum {string} */
            "category-error-type": "slovene-name-already-exists";
        } | {
            /** @enum {string} */
            "category-error-type": "english-name-already-exists";
        } | {
            /** @enum {string} */
            "category-error-type": "no-fields-to-update";
        };
        /** @example {
         *       "category": {
         *         "english_name": "Activities and Combat",
         *         "id": 1,
         *         "slovene_name": "Dejavnosti in spopad"
         *       }
         *     } */
        CategoryResponse: {
            category: components["schemas"]["Category"];
        };
        /** @example {
         *       "english_name": "Activities and Combat",
         *       "slovene_name": "Dejavnosti in spopad"
         *     } */
        CategoryUpdateRequest: {
            new_english_name?: string | null;
            /**
             * Format: uuid
             * @description # Interpreting the double option
             *     To distinguish from an unset and a null JSON value, this field is a
             *     double option. `None` indicates the field was not present
             *     (i.e. that the parent category should not change as part of this update),
             *     while `Some(None)` indicates it was set to `null`
             *     (i.e. that the parent category should be cleared).
             *
             *     See also: [`serde_with::rust::double_option`].
             */
            new_parent_category_id?: string | null;
            new_slovene_name?: string | null;
        };
        EnglishTranslation: {
            /** Format: date-time */
            translated_at: string;
            /** Format: uuid */
            translated_by?: string | null;
            word: components["schemas"]["EnglishWord"];
            word_meaning: components["schemas"]["EnglishWordMeaning"];
        };
        EnglishWord: {
            /**
             * Format: date-time
             * @description When the word was created.
             */
            created_at: string;
            /**
             * Format: uuid
             * @description Word UUID.
             */
            id: string;
            /**
             * Format: date-time
             * @description When the word was last modified.
             *     This includes the last creation or deletion time of the
             *     suggestion or translation linked to this word.
             */
            last_modified_at: string;
            /** @description An abstract or base form of the word. */
            lemma: string;
        };
        /** @example {
         *       "lemma": "adventurer"
         *     } */
        EnglishWordCreationRequest: {
            lemma: string;
        };
        /** @example {
         *       "word": {
         *         "added_at": "2023-06-27T20:34:27.217273Z",
         *         "id": "018dbe00-266e-7398-abd2-0906df0aa345",
         *         "last_edited_at": "2023-06-27T20:34:27.217273Z",
         *         "lemma": "adventurer"
         *       }
         *     } */
        EnglishWordCreationResponse: {
            word: components["schemas"]["EnglishWordWithMeanings"];
        };
        EnglishWordInfoResponse: {
            word: components["schemas"]["EnglishWordWithMeanings"];
        };
        EnglishWordMeaning: {
            abbreviation?: string | null;
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            /** Format: uuid */
            word_meaning_id: string;
        };
        EnglishWordMeaningsResponse: {
            meanings: components["schemas"]["EnglishWordMeaningWithDetails"][];
        };
        EnglishWordMeaningUpdatedResponse: {
            meaning: components["schemas"]["EnglishWordMeaningWithDetails"];
        };
        EnglishWordMeaningUpdateRequest: {
            abbreviation?: string | null;
            description?: string | null;
            disambiguation?: string | null;
        };
        EnglishWordMeaningWithDetails: {
            abbreviation?: string | null;
            categories: string[];
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            translations: components["schemas"]["SloveneTranslation"][];
            /** Format: uuid */
            word_meaning_id: string;
        };
        EnglishWordMeaningWithShallowDetails: {
            abbreviation?: string | null;
            categories: string[];
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            /** Format: uuid */
            word_meaning_id: string;
        };
        EnglishWordsResponse: {
            english_words: components["schemas"]["EnglishWordWithMeanings"][];
        };
        EnglishWordUpdateRequest: {
            lemma?: string | null;
        };
        /** @example {
         *       "created_at": "2023-06-27T20:34:27.217273Z",
         *       "description": "Playable or non-playable character.",
         *       "disambiguation": "character",
         *       "id": "018dbe00-266e-7398-abd2-0906df0aa345",
         *       "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *       "lemma": "adventurer",
         *       "suggested_translations": [],
         *       "translations": [
         *         {
         *           "created_at": "2023-06-27T20:34:27.217273Z",
         *           "description": "Igrani ali neigrani liki, ki se odpravijo na pustolovščino.",
         *           "disambiguation": "lik",
         *           "id": "018dbe00-266e-7398-abd2-0906df0aa346",
         *           "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *           "lemma": "pustolovec"
         *         }
         *       ]
         *     } */
        EnglishWordWithMeanings: {
            /**
             * Format: date-time
             * @description When the word was created.
             */
            created_at: string;
            /**
             * Format: uuid
             * @description Word UUID.
             */
            id: string;
            /**
             * Format: date-time
             * @description When the word was last modified.
             *     This includes the last creation or deletion time of the
             *     suggestion or translation linked to this word.
             */
            last_modified_at: string;
            /** @description An abstract or base form of the word. */
            lemma: string;
            meanings: components["schemas"]["EnglishWordMeaningWithDetails"][];
        };
        ErrorReason: {
            /** @enum {string} */
            type: "missing-authentication";
        } | {
            /** @description Indicates that a permission is required to access an endpoint,
             *     which was either not blanket granted or not one of the user's permissions. */
            data: {
                permissions: components["schemas"]["Permission"][];
            };
            /** @enum {string} */
            type: "missing-permissions";
        } | {
            /** @enum {string} */
            type: "missing-json-body";
        } | {
            /** @description Indicates that the request has an invalid JSON body (see [`InvalidJsonBodyReason`]). */
            data: {
                /** @description Describes why the JSON body is invalid. */
                reason: string;
            };
            /** @enum {string} */
            type: "invalid-json-body";
        } | {
            /** @enum {string} */
            type: "invalid-uuid-format";
        } | {
            data: components["schemas"]["CategoryErrorReason"];
            /** @enum {string} */
            type: "category";
        } | {
            data: components["schemas"]["LoginErrorReason"];
            /** @enum {string} */
            type: "login";
        } | {
            data: components["schemas"]["UsersErrorReason"];
            /** @enum {string} */
            type: "users";
        } | {
            data: components["schemas"]["TranslationsErrorReason"];
            /** @enum {string} */
            type: "translations";
        } | {
            data: components["schemas"]["WordErrorReason"];
            /** @enum {string} */
            type: "word";
        } | {
            data: {
                reason: string;
            };
            /** @enum {string} */
            type: "other";
        };
        /**
         * @description Reasons for a JSON body to not be accepted by the server.
         *
         *     See also: [`EndpointError::invalid_json_body`].
         * @enum {string}
         */
        InvalidJsonBodyReason: "not-json" | "invalid-data" | "too-large";
        /** @description Pertains to all endpoints under `/login`. */
        LoginErrorReason: {
            /** @enum {string} */
            "login-error-type": "invalid-login-credentials";
        } | {
            /** @enum {string} */
            "login-error-type": "expired-refresh-token";
        } | {
            /** @enum {string} */
            "login-error-type": "invalid-refresh-json-web-token";
        } | {
            /** @enum {string} */
            "login-error-type": "not-a-refresh-token";
        };
        NewEnglishWordMeaningCreatedResponse: {
            meaning: components["schemas"]["EnglishWordMeaning"];
        };
        NewEnglishWordMeaningRequest: {
            abbreviation?: string | null;
            description?: string | null;
            disambiguation?: string | null;
        };
        NewSloveneWordMeaningCreatedResponse: {
            meaning: components["schemas"]["SloveneWordMeaning"];
        };
        NewSloveneWordMeaningRequest: {
            abbreviation?: string | null;
            description?: string | null;
            disambiguation?: string | null;
        };
        /**
         * @description Permissions that we have (inspired by the scope system in OAuth).
         *
         *     **Note that permissions can be assigned to roles, not users.**
         *     If you wish to assign certain permissions to a user, assign them
         *     a matching role instead.
         *
         *     See also [`Role`][super::roles::Role].
         *
         *     # Maintenance
         *     **The defined permissions must match the corresponding
         *     migration (see `kolomoni_migrations`)!**
         * @enum {string}
         */
        Permission: "user.self:read" | "user.self:write" | "user.any:read" | "user.any:write" | "word:create" | "word:read" | "word:update" | "word:delete" | "word.translation:create" | "word.translation:delete" | "category:create" | "category:read" | "category:update" | "category:delete";
        PingResponse: {
            ok: boolean;
        };
        /**
         * @description List of registered users.
         * @example {
         *       "users": [
         *         {
         *           "display_name": "Janez Novak",
         *           "id": 1,
         *           "joined_at": "2023-06-27T20:33:53.078789Z",
         *           "last_active_at": "2023-06-27T20:34:27.253746Z",
         *           "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *           "username": "janeznovak"
         *         }
         *       ]
         *     }
         */
        RegisteredUsersListResponse: {
            users: components["schemas"]["UserInfo"][];
        };
        /** @description A JSON-serializable model containing a single field named `reason` ([`ErrorReason`]).
         *
         *     This type is used when responding with strongly-typed error reasons,
         *     **do not use directly in endpoint code**, use e.g. [`EndpointResponseBuilder`] with
         *     its [`with_error_reason`] builder method instead.
         *
         *
         *     [`with_error_reason`]: EndpointResponseBuilder::with_error_reason */
        ResponseWithErrorReason: {
            reason: components["schemas"]["ErrorReason"];
        };
        SearchedWordMeaning: {
            /** Format: float */
            result_score: number;
            /** @enum {string} */
            type: "english";
            word: components["schemas"]["EnglishWord"];
            word_meaning: components["schemas"]["EnglishWordMeaningWithDetails"];
        } | {
            /** Format: float */
            result_score: number;
            /** @enum {string} */
            type: "slovene";
            word: components["schemas"]["SloveneWord"];
            word_meaning: components["schemas"]["SloveneWordMeaningWithDetails"];
        };
        /** @example {
         *       "search_query": "hit points"
         *     } */
        SearchRequest: {
            /** @description Search query. */
            search_query: string;
        };
        SearchResponse: {
            word_meanings: components["schemas"]["SearchedWordMeaning"][];
        };
        SloveneTranslation: {
            /** Format: date-time */
            translated_at: string;
            /** Format: uuid */
            translated_by?: string | null;
            word: components["schemas"]["SloveneWord"];
            word_meaning: components["schemas"]["SloveneWordMeaning"];
        };
        SloveneWord: {
            /**
             * Format: date-time
             * @description When the word was created.
             */
            created_at: string;
            /**
             * Format: uuid
             * @description Internal UUID of the word.
             */
            id: string;
            /**
             * Format: date-time
             * @description When the word was last modified.
             *
             *     TODO In the future, this might include last modification time
             *     of the linked suggestion and translation relationships.
             */
            last_modified_at: string;
            /** @description An abstract or base form of the word. */
            lemma: string;
        };
        /** @example {
         *       "lemma": "pustolovec"
         *     } */
        SloveneWordCreationRequest: {
            lemma: string;
        };
        /** @example {
         *       "word": {
         *         "added_at": "2023-06-27T20:34:27.217273Z",
         *         "description": "Igrani ali neigrani liki, ki se odpravijo na pustolovščino.",
         *         "disambiguation": "lik",
         *         "id": "018dbe00-266e-7398-abd2-0906df0aa345",
         *         "last_edited_at": "2023-06-27T20:34:27.217273Z",
         *         "lemma": "pustolovec"
         *       }
         *     } */
        SloveneWordCreationResponse: {
            word: components["schemas"]["SloveneWordWithMeanings"];
        };
        SloveneWordInfoResponse: {
            word: components["schemas"]["SloveneWordWithMeanings"];
        };
        SloveneWordMeaning: {
            abbreviation?: string | null;
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            /** Format: uuid */
            word_meaning_id: string;
        };
        SloveneWordMeaningsResponse: {
            meanings: components["schemas"]["SloveneWordMeaningWithDetails"][];
        };
        SloveneWordMeaningUpdatedResponse: {
            meaning: components["schemas"]["SloveneWordMeaningWithDetails"];
        };
        SloveneWordMeaningUpdateRequest: {
            abbreviation?: string | null;
            description?: string | null;
            disambiguation?: string | null;
        };
        SloveneWordMeaningWithDetails: {
            abbreviation?: string | null;
            categories: string[];
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            translations: components["schemas"]["EnglishTranslation"][];
            /** Format: uuid */
            word_meaning_id: string;
        };
        SloveneWordMeaningWithShallowDetails: {
            abbreviation?: string | null;
            categories: string[];
            /** Format: date-time */
            created_at: string;
            description?: string | null;
            disambiguation?: string | null;
            /** Format: date-time */
            last_modified_at: string;
            /** Format: uuid */
            word_meaning_id: string;
        };
        SloveneWordsResponse: {
            slovene_words: components["schemas"]["SloveneWordWithMeanings"][];
        };
        SloveneWordUpdateRequest: {
            lemma?: string | null;
        };
        /** @example {
         *       "created_at": "2023-06-27T20:34:27.217273Z",
         *       "description": "Igrani ali neigrani liki, ki se odpravijo na pustolovščino.",
         *       "disambiguation": "lik",
         *       "id": "018dbe00-266e-7398-abd2-0906df0aa345",
         *       "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *       "lemma": "pustolovec"
         *     } */
        SloveneWordWithMeanings: {
            /**
             * Format: date-time
             * @description When the word was created.
             */
            created_at: string;
            /**
             * Format: uuid
             * @description Internal UUID of the word.
             */
            id: string;
            /**
             * Format: date-time
             * @description When the word was last modified.
             *
             *     TODO In the future, this might include last modification time
             *     of the linked suggestion and translation relationships.
             */
            last_modified_at: string;
            /** @description An abstract or base form of the word. */
            lemma: string;
            meanings: components["schemas"]["SloveneWordMeaningWithDetails"][];
        };
        TranslationCreationRequest: {
            /** Format: uuid */
            english_word_meaning_id: string;
            /** Format: uuid */
            slovene_word_meaning_id: string;
        };
        /** @description Pertains to all endpoints under `/dictionary/translation` */
        TranslationsErrorReason: {
            /** @enum {string} */
            "translation-error-type": "english-word-meaning-not-found";
        } | {
            /** @enum {string} */
            "translation-error-type": "slovene-word-meaning-not-found";
        } | {
            /** @enum {string} */
            "translation-error-type": "translation-relationship-not-found";
        } | {
            /** @enum {string} */
            "translation-error-type": "translation-relationship-already-exists";
        };
        /**
         * @description User (API caller) request to change a user's display name.
         *
         *     This struct is used as a request in the public API.
         * @example {
         *       "new_display_name": "Janez Novak Veliki"
         *     }
         */
        UserDisplayNameChangeRequest: {
            /** @description Display name to change to. */
            new_display_name: string;
        };
        /** @description Response indicating successful change of a display name.
         *     Contains the updated user information.
         *
         *     This struct is used as a response in the public API. */
        UserDisplayNameChangeResponse: {
            user: components["schemas"]["UserInfo"];
        };
        /**
         * @description Information about a single user.
         *
         *     This struct is used as part of a response in the public API.
         *
         *     TODO needs updated example
         * @example {
         *       "display_name": "Janez Novak",
         *       "id": 1,
         *       "joined_at": "2023-06-27T20:33:53.078789Z",
         *       "last_active_at": "2023-06-27T20:34:27.253746Z",
         *       "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *       "username": "janeznovak"
         *     }
         */
        UserInfo: {
            /** @description Unique display name. */
            display_name: string;
            /**
             * Format: uuid
             * @description Internal user ID.
             */
            id: string;
            /**
             * Format: date-time
             * @description Registration date and time.
             */
            joined_at: string;
            /**
             * Format: date-time
             * @description Last activity date and time.
             */
            last_active_at: string;
            /**
             * Format: date-time
             * @description Last modification date and time.
             */
            last_modified_at: string;
            /** @description Unique username for login. */
            username: string;
        };
        /**
         * @description Information about one user in particular.
         *
         *     This struct is used as a response in the public API.
         * @example {
         *       "user": {
         *         "display_name": "Janez Novak",
         *         "id": 1,
         *         "joined_at": "2023-06-27T20:33:53.078789Z",
         *         "last_active_at": "2023-06-27T20:34:27.253746Z",
         *         "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *         "username": "janeznovak"
         *       }
         *     }
         */
        UserInfoResponse: {
            user: components["schemas"]["UserInfo"];
        };
        /**
         * @description Information with which to refresh a user's login, generating a new access token.
         * @example {
         *       "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdGFyaSBLb2xvbW9uaSIsInN1YiI6IkFQSSB0b2tlbiIsImlhdCI6MTY4Nzk3MTMyMiwiZXhwIjoxNjg4NTc2MTI2LCJ1c2VybmFtZSI6InRlc3QiLCJ0b2tlbl90eXBlIjoicmVmcmVzaCJ9.Ze6DI5EZ-swXRQrMW3NIppYejclGbyI9D6zmYBWJMLk"
         *     }
         */
        UserLoginRefreshRequest: {
            /** @description Refresh token to use to generate an access token.
             *
             *     Token must not have expired to work. */
            refresh_token: string;
        };
        /**
         * @description Response on successful login refresh.
         * @example {
         *       "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdGFyaSBLb2xvbW9uaSIsInN1YiI6IkFQSSB0b2tlbiIsImlhdCI6MTY4Nzk3MTMyMiwiZXhwIjoxNjg4MDU3NzI2LCJ1c2VybmFtZSI6InRlc3QiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIn0.ZnuhEVacQD_pYzkW9h6aX3eoRNOAs2-y3EngGBglxkk"
         *     }
         */
        UserLoginRefreshResponse: {
            /** @description Newly-generated access token to use in future requests. */
            access_token: string;
        };
        /**
         * @description User login information.
         * @example {
         *       "password": "verysecurepassword",
         *       "username": "sample_user"
         *     }
         */
        UserLoginRequest: {
            /** @description Password. */
            password: string;
            /** @description Username to log in as. */
            username: string;
        };
        /**
         * @description Response on successful user login.
         *
         *     Contains two tokens:
         *     - the `access_token` that should be appended to future requests and
         *     - the `refresh_token` that can be used on `POST /api/v1/users/login/refresh` to
         *     receive a new (fresh) request token.
         *
         *     This works because the `refresh_token` has a longer expiration time.
         * @example {
         *       "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdGFyaSBLb2xvbW9uaSIsInN1YiI6IkFQSSB0b2tlbiIsImlhdCI6MTY4Nzk3MTMyMiwiZXhwIjoxNjg4MDU3NzI2LCJ1c2VybmFtZSI6InRlc3QiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIn0.ZnuhEVacQD_pYzkW9h6aX3eoRNOAs2-y3EngGBglxkk",
         *       "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdGFyaSBLb2xvbW9uaSIsInN1YiI6IkFQSSB0b2tlbiIsImlhdCI6MTY4Nzk3MTMyMiwiZXhwIjoxNjg4NTc2MTI2LCJ1c2VybmFtZSI6InRlc3QiLCJ0b2tlbl90eXBlIjoicmVmcmVzaCJ9.Ze6DI5EZ-swXRQrMW3NIppYejclGbyI9D6zmYBWJMLk"
         *     }
         */
        UserLoginResponse: {
            /** @description JWT access token.
             *     Provide in subsequent requests in the `Authorization` header as `Bearer your_token_here`. */
            access_token: string;
            /** @description JWT refresh token. */
            refresh_token: string;
        };
        /**
         * @description Response containing a list of active permissions.
         *
         *     This struct is used as a response in the public API.
         * @example {
         *       "permissions": [
         *         "user.self:read",
         *         "user.self:write",
         *         "user.any:read"
         *       ]
         *     }
         */
        UserPermissionsResponse: {
            permissions: string[];
        };
        /**
         * @description User registration request provided by an API caller.
         * @example {
         *       "display_name": "Janez Novak",
         *       "password": "perica_reže_raci_rep",
         *       "username": "janeznovak"
         *     }
         */
        UserRegistrationRequest: {
            /** @description Name to display as in the UI. */
            display_name: string;
            /** @description Password for this user account. */
            password: string;
            /** @description Username to register as (not the same as the display name). */
            username: string;
        };
        /**
         * @description API-serializable response upon successful user registration.
         *     Contains the newly-created user's information.
         * @example {
         *       "user": {
         *         "display_name": "Janez Novak",
         *         "id": 1,
         *         "joined_at": "2023-06-27T20:33:53.078789Z",
         *         "last_active_at": "2023-06-27T20:34:27.253746Z",
         *         "last_modified_at": "2023-06-27T20:34:27.217273Z",
         *         "username": "janeznovak"
         *       }
         *     }
         */
        UserRegistrationResponse: {
            user: components["schemas"]["UserInfo"];
        };
        /** @example {
         *       "roles_to_add": [
         *         "administrator"
         *       ]
         *     } */
        UserRoleAddRequest: {
            roles_to_add: string[];
        };
        /** @example {
         *       "role_names": [
         *         "user",
         *         "administrator"
         *       ]
         *     } */
        UserRolesResponse: {
            role_names: string[];
        };
        /** @description Pertains to all endpoints under `/users`. */
        UsersErrorReason: {
            /** @enum {string} */
            "users-error-type": "user-not-found";
        } | {
            /** @enum {string} */
            "users-error-type": "username-already-exists";
        } | {
            /** @enum {string} */
            "users-error-type": "display-name-already-exists";
        } | {
            /** @enum {string} */
            "users-error-type": "cannot-modify-your-own-account";
        } | {
            role_name: string;
            /** @enum {string} */
            "users-error-type": "invalid-role-name";
        } | {
            role: string;
            /** @enum {string} */
            "users-error-type": "unable-to-give-out-unowned-role";
        } | {
            role: string;
            /** @enum {string} */
            "users-error-type": "unable-to-take-away-unowned-role";
        };
        /** @description Pertains to all endpoints under:
         *     - `/dictionary/english`, and
         *     - `/dictionary/slovene` */
        WordErrorReason: {
            /** @enum {string} */
            "word-error-type": "word-not-found";
        } | {
            /** @enum {string} */
            "word-error-type": "word-meaning-not-found";
        } | {
            /** @enum {string} */
            "word-error-type": "word-meaning-category-relationship-not-found";
        } | {
            /** @enum {string} */
            "word-error-type": "word-with-this-lemma-already-exists";
        } | {
            /** @enum {string} */
            "word-error-type": "word-meaning-already-has-this-category";
        } | {
            /** @enum {string} */
            "word-error-type": "identical-word-meaning-already-exists";
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserLoginRequest"];
            };
        };
        responses: {
            /** @description Login successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserLoginResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Invalid login credentials. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    refresh_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserLoginRefreshRequest"];
            };
        };
        responses: {
            /** @description Login refresh successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserLoginRefreshResponse"];
                };
            };
            /** @description The provided refresh token has expired.
             *
             *     *OR*
             *
             *     The provided refresh token is invalid (not a valid JWT).
             *
             *     *OR*
             *
             *     The provided JWT is not a refresh token.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    register_user: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserRegistrationRequest"];
            };
        };
        responses: {
            /** @description Registration successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRegistrationResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The provided username is already in use.
             *
             *     *OR*
             *
             *     The provided display name is already in use. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_all_categories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The category list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoriesResponse"];
                };
            };
            /** @description Missing a required permission: `category:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_category: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryCreationRequest"];
            };
        };
        responses: {
            /** @description The category has been created. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryCreationResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `category:create`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The provided slovene name for the new category is already present on an existing category.
             *
             *     *OR*
             *
             *     The provided english name for the new category is already present on an existing category. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_specific_category: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category. */
                category_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Category information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `category:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Category does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_specific_category: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to delete. */
                category_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Category has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `category:delete`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Category does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_specific_category: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to update. */
                category_uuid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated category information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponse"];
                };
            };
            /** @description Invalid request body: you should provide at least one field to update.
             *
             *     *OR*
             *
             *     One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `category:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Category does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested update cannot be applied, because the new english category name is already present on another category.
             *
             *     *OR*
             *
             *     The requested update cannot be applied, because the new slovene category name is already present on another category. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_all_english_words: {
        parameters: {
            query?: {
                last_modified_after?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of all english words. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordsResponse"];
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_english_word: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EnglishWordCreationRequest"];
            };
        };
        responses: {
            /** @description The newly-created english word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordCreationResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:create`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description An english word with the given lemma already exists. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_all_english_word_meanings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word to get meanings for. */
                english_word_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Requested english word meanings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordMeaningsResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_english_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word to associate the meaning with. */
                english_word_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NewEnglishWordMeaningRequest"];
            };
        };
        responses: {
            /** @description Newly-created english word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NewEnglishWordMeaningCreatedResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description An english word meaning with the given fields already exists. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_english_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word related to the meaning. */
                english_word_id: string;
                /** @description UUID of the english word meaning to modify. */
                english_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested english word meaning has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist.
             *
             *     *OR*
             *
             *     The english word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_english_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word related to the meaning. */
                english_word_id: string;
                /** @description UUID of the english word meaning to modify. */
                english_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EnglishWordMeaningUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated english word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordMeaningUpdatedResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist.
             *
             *     *OR*
             *
             *     The english word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    link_category_to_english_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to link to. */
                category_id: string;
                /** @description UUID of the english word related to the meaning. */
                english_word_id: string;
                /** @description UUID of the english word meaning. */
                english_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The category has been linked to the english word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist.
             *
             *     *OR*
             *
             *     The english word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified category is already linked to this english word meaning. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    unlink_category_from_english_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to unlink from. */
                category_id: string;
                /** @description UUID of the english word related to the meaning. */
                english_word_id: string;
                /** @description UUID of the english word meaning. */
                english_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The category has been unlinked from the english word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist.
             *
             *     *OR*
             *
             *     The english word exists, but its associated word meaning does not.
             *
             *     *OR*
             *
             *     The specified category is not linked to this english word meaning. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_english_word_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested english word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_english_word: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word to delete. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description English word deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:delete`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_english_word: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the english word. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EnglishWordUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated english word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description An english word with the given lemma already exists. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_english_word_by_lemma: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description English word lemma to look up. */
                word_lemma: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested english word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnglishWordInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified english word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    perform_search: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchRequest"];
            };
        };
        responses: {
            /** @description Search results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_all_slovene_words: {
        parameters: {
            query?: {
                last_modified_after?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of all slovene words. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordsResponse"];
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_slovene_word: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SloveneWordCreationRequest"];
            };
        };
        responses: {
            /** @description The newly-created slovene word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordCreationResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:create`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description A slovene word with the given lemma already exists. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_all_slovene_word_meanings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word to get meanings for. */
                slovene_word_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Requested slovene word meanings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordMeaningsResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_slovene_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word to associate the meaning with. */
                slovene_word_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NewSloveneWordMeaningRequest"];
            };
        };
        responses: {
            /** @description Newly-created slovene word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NewSloveneWordMeaningCreatedResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description A slovene word meaning with the given fields already exists. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_slovene_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word to related to the meaning. */
                slovene_word_id: string;
                /** @description UUID of the slovene word meaning to modify. */
                slovene_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested slovene word meaning has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist.
             *
             *     *OR*
             *
             *     The slovene word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_slovene_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word to related to the meaning. */
                slovene_word_id: string;
                /** @description UUID of the slovene word meaning to modify. */
                slovene_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SloveneWordMeaningUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated slovene word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordMeaningUpdatedResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist.
             *
             *     *OR*
             *
             *     The slovene word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    link_category_to_slovene_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to link to. */
                category_id: string;
                /** @description UUID of the slovene word related to the meaning. */
                slovene_word_id: string;
                /** @description UUID of the sslovene word meaning. */
                slovene_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The category has been linked to the slovene word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist.
             *
             *     *OR*
             *
             *     The slovene word exists, but its associated word meaning does not. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The specified category is already linked to this slovene word meaning. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    unlink_category_from_slovene_word_meaning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the category to link to. */
                category_id: string;
                /** @description UUID of the slovene word related to the meaning. */
                slovene_word_id: string;
                /** @description UUID of the sslovene word meaning. */
                slovene_word_meaning_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The category has been unlinked from the english word meaning. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist.
             *
             *     *OR*
             *
             *     The slovene word exists, but its associated word meaning does not.
             *
             *     *OR*
             *
             *     The specified category is not linked to this slovene word meaning. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_slovene_word_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested slovene word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_slovene_word: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word to delete. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Slovene word deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:delete`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_slovene_word: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the slovene word. */
                word_uuid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SloveneWordUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated slovene word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word:update`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_slovene_word_by_lemma: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Slovene word lemma to look up. */
                word_lemma: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Information about the requested slovene word. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SloveneWordInfoResponse"];
                };
            };
            /** @description Missing a required permission: `word:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The requested slovene word does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_translation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TranslationCreationRequest"];
            };
        };
        responses: {
            /** @description The translation relationship has been created. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The provided slovene word meaning doesn't exist.
             *
             *     *OR*
             *
             *     The provided english word meaning doesn't exist.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word.translation:create`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The translation relationship already exists for the given word meaning pair. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_translation: {
        parameters: {
            query: {
                english_word_meaning_id: string;
                slovene_word_meaning_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The translation relationship has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The provided slovene word meaning doesn't exist.
             *
             *     *OR*
             *
             *     The provided english word meaning doesn't exist. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `word.translation:delete`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description The translation relationship with the provided slovene and english word meaning IDs does not exist. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ping: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Server is alive and well. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PingResponse"];
                };
            };
        };
    };
    get_all_registered_users: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of registered users. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RegisteredUsersListResponse"];
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `user.any:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_specific_user_info: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the user to get information about. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `user.any:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_specific_user_display_name: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the user to change the display name for. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserDisplayNameChangeRequest"];
            };
        };
        responses: {
            /** @description User's display name changed. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserDisplayNameChangeResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You are not allowed to change your own account on this endpoint.
             *
             *     *OR*
             *
             *     Missing a required permission: `user.any:write`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Unable to change user's display name, because the given display name is already in use. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_specific_user_effective_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the user to get effective permissions for. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User permissions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPermissionsResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `user.any:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_specific_user_roles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the user to query roles for. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User's role list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRolesResponse"];
                };
            };
            /** @description One of the expected URL parameters was an UUID (string), but it was in an invalid format. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing a required permission: `user.any:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    add_roles_to_specific_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the user to add roles to. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserRoleAddRequest"];
            };
        };
        responses: {
            /** @description Updated user role list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRolesResponse"];
                };
            };
            /** @description Invalid role name.
             *
             *     *OR*
             *
             *     One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not allowed to add a given role, because you do not have it.
             *
             *     *OR*
             *
             *     You are not allowed to change your own account on this endpoint.
             *
             *     *OR*
             *
             *     Missing a required permission: `user.any:write`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    remove_roles_from_specific_user: {
        parameters: {
            query: {
                roles_to_remove: string[];
            };
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Updated user role list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRolesResponse"];
                };
            };
            /** @description Invalid role name.
             *
             *     *OR*
             *
             *     One of the expected URL parameters was an UUID (string), but it was in an invalid format.
             *
             *     *OR*
             *
             *     Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not allowed to remove a given role, because you do not have it.
             *
             *     *OR*
             *
             *     You are not allowed to change your own account on this endpoint.
             *
             *     *OR*
             *
             *     Missing a required permission: `user.any:write`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_current_user_info: {
        parameters: {
            query?: never;
            header: {
                /**
                 * @description If specified, this header makes the server return `304 Not Modified` without content (instead of `200 OK` with the usual response) if the requested data hasn't changed since the specified timestamp.
                 *
                 *      See [this article on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since) for more information about this conditional header.
                 * @example Wed, 21 Oct 2015 07:28:00 GMT
                 */
                "If-Modified-Since": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Information about the current user (i.e. the user who owns the authentication token used in the request). */
            200: {
                headers: {
                    /** @description Last user modification time. You may use this value for caching purposes. */
                    "Last-Modified"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoResponse"];
                };
            };
            /** @description Resource hasn't been modified since the timestamp specified in the `If-Modified-Since` header. As such, this status code can only be returned if that header is provided in the request. */
            304: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `user.self:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Your user account no longer exists. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    update_current_user_display_name: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserDisplayNameChangeRequest"];
            };
        };
        responses: {
            /** @description Your display name has been changed. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserDisplayNameChangeResponse"];
                };
            };
            /** @description Invalid (or missing) JSON body. An expected JSON body can be invalid due to either the JSON syntax itself not being valid, or because the data itself (the schema) is invalid. Additionally, the server will refuse to process JSON payloads that exceed the configured maximum size (though this should be exceedingly rare). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `user.self:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Your user account no longer exists. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Unable to change display name, because the given display name is already in use. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_current_user_effective_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A list of your permissions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPermissionsResponse"];
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `user.self:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Your user account no longer exists. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_current_user_roles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of roles for the authenticated user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserRolesResponse"];
                };
            };
            /** @description Missing user authentication, provide an `Authorization: Bearer your-token-here` header. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing a required permission: `user.self:read`. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Your user account no longer exists. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reason: components["schemas"]["ErrorReason"];
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
