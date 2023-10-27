// ==UserScript==
// @name         IMDb 30nama Link
// @namespace    https://github.com/ar3h1d/letterboxd_30nama_link
// @version      0.1
// @description  Adds a button to IMDb movie pages that links to the 30nama page of the movie.
// @author       ar3h1d
// @match        https://www.imdb.com/title/*
// @grant        none
// @icon         https://raw.githubusercontent.com/ar3h1d/letterboxd_30nama_link/main/IMDb_30nama_icon.png
// @license      GPL3
// ==/UserScript==

(function() {
    'use strict';

    // Extract movie title from the URL
    let movieID = document.URL.split("/")[4];
    if (movieID) {
        // Create the 30nama link
        const sinamaLink = `https://30nama.com/search?q=${movieID}`;

        // Create the button element
        const sinamaButton = document.createElement('button');
        sinamaButton.className = 'ipc-responsive-button ipc-btn--theme-baseAlt ipc-responsive-button--transition-m ipc-btn--on-textPrimary ipc-responsive-button--single-padding';
        sinamaButton.href = sinamaLink;
        sinamaButton.textContent = '30nama';
        sinamaButton.target = '_blank';
        sinamaButton.style.marginLeft = '10px';
        sinamaButton.style.marginRight = '15px';
        sinamaButton.style.border = '1px solid';
        sinamaButton.style.color = '#d24040';

        // Add an onclick attribute that calls a function to redirect the user
        sinamaButton.onclick = function() {
            window.open(sinamaLink, '_blank');
        };

        // Find the TMDb button
        const reviewsButton = document.querySelector('button[aria-label="View all topics"]');
        if (reviewsButton) {
            // Insert the 30nama button after the All Topics button
            reviewsButton.parentNode.insertBefore(sinamaButton, reviewsButton.nextSibling);
        }
    }
})();