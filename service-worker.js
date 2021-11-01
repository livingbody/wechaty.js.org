                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/10/30/gsod-2021-report-on-improve-the-grpc-and-openapi-ecosystem/","revision":"3dec27fcb9b82c6fcab592465123bfe1"},{"url":"/2021/10/29/zilliz-milvus-open-source-panel/","revision":"893d411c22736c1ed1027054cc60cff8"},{"url":"/2021/10/28/osschat-is-what-you-need-for-opensouce-community-operations/","revision":"4fc219d65012de88740c68afbe815c55"},{"url":"/2021/10/28/opentekr-oss-pioneer-interview-huan/","revision":"e92a473e03409196c87af73796f8cdbb"},{"url":"/2021/10/20/wechaty-tutorials-final-blog/","revision":"157cd46fa34182ba2fd89ae8c9f037fe"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
