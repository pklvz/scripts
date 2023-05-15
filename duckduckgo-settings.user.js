// ==UserScript==
// @name        duckduckgo-settings
// @version     0.1.0
// @match       *://*.duckduckgo.com/*
// @require     https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js
// @run-at      document-start
// ==/UserScript==

{
    Cookies.set('av', '1');
    Cookies.set('p', '-2');
    Cookies.set('1', '-1');
    Cookies.set('n', '1');
    Cookies.set('ah', 'cn-zh');
};
