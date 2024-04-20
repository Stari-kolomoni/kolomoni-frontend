<h1 align="center">Stari Kolomoni frontend</h1>


[![Licensed under GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue?style=flat-square)](https://github.com/Stari-kolomoni/kolomoni-frontend/blob/master/LICENSE.md)

This repository contains the full frontend for the Stari Kolomoni open fantasy translation project.

<br>
<br>


## 1. Deployment
TODO :-)



## 2. Development notes
To set up a cloned repository for developing the frontend, run `yarn install`. To start the Vite dev server, run `yarn dev`. For more details, take a look at the available scripts in `package.json`.


---

### `.env`: setting up environment variables
An important step in setting up the frontend is telling it where the backend API server can be found at. Do this by creating an `.env` file in the root directory of the repository and setting the `PUBLIC_BASE_API_URL` environment variable, e.g. `PUBLIC_BASE_API_URL=http://127.0.0.1:8866/api/v1`.


---

### `src/lib/api`: types and validators for the backend API
> In order to avoid repeating code between the backend and the frontend as much as possible, 
> the backend server has the ability to generate and serve an OpenAPI schema covering its entire API. 
> The frontend repository takes that schema and uses it to generate TypeScript types 
> and `ajv` validators that ensures stronger typing in the frontend as well, 
> as well as decreases maintenance burden.

Contents of the `src/lib/api/auto-generated` directory are *fully auto-generated* from the backend OpenAPI schema, though some minor manual work is required to introduce new API types and validators.

As mentioned, we use the OpenAPI schema to generate two things:
- TypeScript types for backend API responses (see `src/lib/api/schemaTypes.ts`), and
- runtime validation of backend API responses (see `src/lib/api/schemaValidators.ts`), with compile-time validator code generation (using `ajv`).


#### Cleaning and recompiling all types and validators
When the backend API changes, so will its OpenAPI schema. In those cases, it's best to clean the auto-generated code and regenerate all the types and validators from a fresh OpenAPI JSON schema file.

To do so, execute `yarn api:clean` and `yarn api:generate` and follow the instructions.


#### Exposing a new type and creating a validator
When you wish to call a new endpoint on the backend, the response for which hasn't yet been assigned a type or a validator, you basically need to expose two things: the TypeScript type for that response, and a validator for that type.

TypeScript types for the entire API surface are actually already auto-generated in the `src/lib/api/auto-generated/openApiSchema.d.ts` file, but you *should not use those types directly* in the rest of the application. Instead, we'll expose them as named types and create validators for them!

First, add an `export type YourTypeName = ...` in `src/lib/api/schemaTypes.ts`. You should refer directly to the OpenAPI schema provided by the `components` and `paths` variables. *Avoid manually declaring types* using the object notation or similar - the entire purpose of the auto-generated types is that we avoid such repetition.

Second, run `yarn api-validators:generate` to recompile the validators. Due to the new export you added above, an additional validator will be compiled. Its name will match the name of the exported type in `src/lib/api/schemaTypes.ts`, e.g. `src/lib/api/auto-generated/validation/YourTypeName.{d.ts,js}`.

After the script completes, all that remains is adding the validator "shim" into `src/lib/api/schemaValidators.ts` by adding a variant of the following:

```ts
// Add imports at the top.
import { YourTypeName as yourTypeNameValidator } from "./auto-generated/validation/YourTypeName";
import type { YourTypeName } from "./schemaTypes";

// ...

// Add a new section at the bottom.
export function validateYourTypeName(content: unknown): asserts content is YourTypeName {
    if (!yourTypeNameValidator(content)) {
        throw ApiSchemaValidationError.fromTypeNameAndReason(
            "YourTypeName",
            yourTypeNameValidator.errors,
        );
    }
}
```

Obviously, adapt the type name from `YourTypeName` to the name of your newly added type.

You're done! To use the newly-introduced type, simply import `YourTypeName` wherever you need it, calling `validateYourTypeName(apiResponseJson)` whenever you wish to validate that the schema actually matches that type.


---

### `src/lib/style`: use global SCSS stylesheets, avoid scoped Svelte styles
> *We tend to avoid scoped Svelte styles in this project, 
> instead opting to use a global stylesheet.*

The `src/lib/style` directory contains a set of SCSS partials ("partial rules") as well as the entry point to the stylesheets of the entire Stari Kolomoni application: `global-styles.scss`. This file is loaded in `src/routes/+layout.svelte`, ensuring the styles are present on all pages.

The stylesheet is made up of several distinct parts:
- Several partials from the `src/lib/style` directory: for cases where the styles don't belong to any particular component or page (e.g. a CSS reset, or basic parts of the Stari Kolomoni design system).
- Individual partial styles for all available Svelte components inside the `src/lib/components` directory: this loads styles for each available atom, molecule and organism (see notes on Atomic Design for terminology). The entry point for those styles is `src/lib/components/_components.scss`.
- Individual specific styles for each page inside the `src/routes` directory: this load styles for each routed page with a specific stylesheet. The entry point for those styles is `src/lib/routes/_routes.scss`.


Using this technique, we avoid using scoped Svelte styles, and serve a single CSS file instead. We decided to do this because it makes style reuse slightly easier, as well as avoids pseudo-random class IDs. Those especially are a pain for community styling and userscript development, among other things.

> TODO documentation about [Enduring CSS](https://ecss.benfrain.com).


---

### `src/lib/components`: respect Atomic Design principles for Svelte components
In order to make components easier to understand at a glance as well as to sort them based on their completeness and scope, we decided to adopt the [Atomic Design](https://atomicdesign.bradfrost.com) methodology. The guidebook is very much worth a read before delving further into the repository, particularly [the chapter on metodology](https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology).

To summarise:
- Atom components live in the `atoms` directory: atoms are the most basic building blocks for the user interface, and are less commonly useful on their own; examples include an input, label, spinner, icon, etc.
- Molecule components live in the `molecules` directory: molecules are slightly more complex / compound Svelte components that start to bring more complex functionality to the table; examples include a progress bar, notification, search bar, etc.
- Organism components live in the `organisms` directory: organisms are even more complete and complex Svelte components, but still self-contained - they form distinct sections of the user interface and can contain more complex and full-featured functionality, but are generally less reusable than molecules; examples include a sidebar, footer, login form, etc.

The atomic design methodology does mention two more types: *templates* are not really represented here, since there hasn't yet been a need for them. Ahey are basically the same as the fifth type - *pages*; those are defined in the `src/routes` directory.


---

### `src/routes`: SvelteKit routes
- Make sure to add individual `*.scss` files to the "master" route SCSS file `_routes.scss`! This way, a consistent set of global styles is included with the web app (we generally don't take advantage of Svelte's scoped styles in this project).