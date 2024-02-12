/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import Logger, { CommonColors } from "$lib/logger";

const sw = self as unknown as ServiceWorkerGlobalScope;

const log = new Logger("SW", CommonColors.XIKETIC);


const putResponseInCache = async (
    request: Request,
    response: Response,
) => {
    const cache = await caches.open("primary");
    await cache.put(request, response);
};

const getCachedResponse = async (request: Request): Promise<Response | null> => {
    const cacheMatch = await caches.match(request);

    return typeof cacheMatch === "undefined" ? null : cacheMatch;
}

const getCachedResponseModificationTime = async (response: Response | null): Promise<string | null> => {
    if (response !== null) {
        return response.headers.get("Last-Modified");
    } else {
        return null;
    }
};


const requestPassThrough = async (request: Request): Promise<Response> => {
    return await fetch(request);
}

const requestWithLastModificationCache = async (request: Request): Promise<Response> => {
    const cachedResponse = await getCachedResponse(request);
    const cachedResponseModificationTime = await getCachedResponseModificationTime(cachedResponse);

    let finalRequest: Request;
    if (cachedResponseModificationTime !== null) {
        const updatedHeaders = new Headers(request.headers);
        updatedHeaders.set("If-Modified-Since", cachedResponseModificationTime);

        finalRequest = new Request(
            request,
            { headers: updatedHeaders }
        );
    } else {
        // Unmodified request.
        finalRequest = request;
    }

    const apiEndpoint = new URL(request.url).pathname;
    const response = await fetch(finalRequest);

    if (response.status === 304 && cachedResponse !== null) {
        log.debug("Server responded with 304, serving cached response for endpoint \"" + apiEndpoint + "\".");
        return cachedResponse;
    } else {
        log.debug("Server responded with non-304, caching and serving fresh response for endpoint \"" + apiEndpoint + "\".");
        await putResponseInCache(request, response.clone());
        return response;
    }
};


sw.addEventListener("install", (_event: ExtendableEvent) => {
    log.log("Service worker installed.");
});

sw.addEventListener("activate", (_event: ExtendableEvent) => {
    log.log("Service worker activated.");
});

sw.addEventListener("fetch", (event: FetchEvent) => {
    if (/\/api\/v1\/users\/me$/.test(event.request.url)) {   
        log.debug("Got user data request.");
        event.respondWith(requestWithLastModificationCache(event.request));
    } else {
        event.respondWith(requestPassThrough(event.request));
    }
});
