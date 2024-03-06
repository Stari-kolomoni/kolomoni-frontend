/**
 * Parses the provided HTML string into a proper DOM Element.
 *
 * @param content String containing the HTML you wish to convert into a DOM element.
 */
export function stringToHtmlElement(content: string) {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = content.trim();

    const innerElement = templateElement.content.children;

    if (innerElement.length !== 1) {
        throw new Error(
            "Expected the provided string to contain exactly one HTML element.",
        );
    }

    return innerElement[0];
}

/**
 * Checks whether the value is an Object.
 * With help from https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript and lodash.
 *
 * @param value - Value to check.
 * @returns Boolean indicating whether the value is an object.
 */
export function isObject(value: never): boolean {
    return typeof value === "object" && value !== null;
}

/**
 * Clamp a given value between a minimum and maximum value.
 *
 * @param value Value to clamp.
 * @param minimum Minimum value to return.
 * @param maximum Maximum value to return.
 */
export function clamp(value: number, minimum: number, maximum: number): number {
    if (value < minimum) {
        return minimum;
    }

    if (value > maximum) {
        return maximum;
    }

    return value;
}

/**
 * Similar idea as `clamp`, but the returned value indicates whether
 * the `value` in inside the clamping range.
 *
 * @param value Value to check for potential clamping.
 * @param minimum Minimum value.
 * @param maximum Maximum value.
 */
export function isInRange(value: number, minimum: number, maximum: number): boolean {
    return value >= minimum && value <= maximum;
}

/**
 * Strip the `prefix` from a string `value`.
 * If the string does not start with the specified prefix,
 * the original string is returned unmodified.
 *
 * @param value String to strip prefix from.
 * @param prefix Prefix to remove.
 */
export function stripStringPrefix(value: string, prefix: string): string {
    if (value.startsWith(prefix)) {
        return value.slice(prefix.length);
    }

    return value;
}

/**
 * Strip the `suffix` from a string `value`.
 * If the string does not end with the specified suffix,
 * the original string is returned unmodified.
 *
 * @param value String to strip suffix from.
 * @param suffix Suffix to remove.
 */
export function stripStringSuffix(value: string, suffix: string): string {
    if (value.endsWith(suffix)) {
        return value.slice(0, -1 * suffix.length);
    }

    return value;
}


/**
 * Strip the `suffix` from a string `value`.
 * If the string does not end with the specified suffix,
 * the original string is returned unmodified.
 *
 * @param value String to strip suffix from.
 * @param prefix Prefix to remove.
 * @param suffix Suffix to remove.
 */
export function stripStringPrefixAndSuffix(value: string, prefix: string, suffix: string): string {
    const modifiedString = value;

    if (value.startsWith(prefix)) {
        return value.slice(prefix.length);
    }

    if (value.endsWith(suffix)) {
        return value.slice(0, -1 * suffix.length);
    }

    return modifiedString;
}



export function curryAsyncCallbackWithThrottling<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    C extends (...args: any[]) => Promise<void>
>(
    callback: C,
    minimumIntervalMilliseconds: number
): (...args: Parameters<C>) => Promise<void> {
    let trailingTriggerTimeout: number | null = null;
    let hasPendingTrigger: boolean = false;

    return async function (this: unknown, ...args: Parameters<C>): Promise<void> {

        if (trailingTriggerTimeout === null) {
            callback.call(this, args);

            // We set up a timeout that will only trigger if 
            // another call is attempted while we're on cooldown.
            trailingTriggerTimeout = window.setTimeout(
                () => {
                    if (hasPendingTrigger) {
                        callback.apply(this, args);
                    }

                    trailingTriggerTimeout = null;
                },
                minimumIntervalMilliseconds
            );
        } else {
            // We set up the trailing call here: the caller wanted to perform
            // a call, but we're on cooldown. Therefore we mark the call as pending,
            // triggering it from the timeout when the cooldown expires.
            hasPendingTrigger = true;
        }
    };
}
