// Taken from: https://github.com/jordwest/news-feed-eradicator/blob/master/src/eradicate.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Elements in here are removed from the DOM.
// These selectors should also be added to `eradicate.css`
// to ensure they're hidden before the script loads.
const elementsToRemove = '.ticker_stream,' +
    '.ego_column,' +
    '#pagelet_games_rhc,' +
    '#stories_pagelet_rhc,' +
    '#fb_stories_card_root,' +
    '#pagelet_trending_tags_and_topics,' +
    '#pagelet_canvas_nav_content';
const elementsToEmpty = '[id^=topnews_main_stream],' +
    '[id^=mostrecent_main_stream],' +
    '[id^=pagelet_home_stream]';
const removeNode = (node) => node.parentNode.removeChild(node);
const removeChildren = (node) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
};
function removeFeed() {
    console.log("trying!");
    document.querySelectorAll(elementsToRemove).forEach(removeNode);
    document.querySelectorAll(elementsToEmpty).forEach(removeChildren);
}
exports.default = removeFeed;
