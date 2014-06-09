// ==UserScript==
// @name        GithubHighlightLastUpdate
// @namespace   http://syohex.org
// @description Highlighting old updated file in github.com
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==
var now = new Date();
var updateTimes = document.querySelectorAll("td.age > span > time");

for (var i = 0; i < updateTimes.length; ++i) {
    var dateNode = updateTimes[i];
    var datetime = dateNode.getAttribute("datetime");
    if (datetime === null) {
        continue;
    }

    var updateTime = new Date(datetime);
    var diff = new Date(now - updateTime);
    var diffYear = diff.getUTCFullYear() - 1970;
    var diffMonth = diff.getUTCMonth();
    if (diffYear === 0 && diffMonth >= 5) {
        dateNode.style.color = "Orange";
    } else if (diffYear >= 1) {
        dateNode.style.color = "Red";
    }
}
