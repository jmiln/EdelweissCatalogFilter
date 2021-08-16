function filter() {
    browser.tabs.executeScript({file: "../scripts/filterCats.js"});
}

function search() {
    browser.tabs.executeScript({file: "../scripts/searchCats.js"});
}

function tagView() {
    browser.tabs.executeScript({file: "../scripts/tagView.js"});
}

function getIsbns() {
    browser.tabs.executeScript({file: "../scripts/getIsbns.js"});
}

function getTitleInfo() {
    browser.tabs.executeScript({file: "../scripts/getTitleListInfo.js"});
}

// Button to filter the catalogs based on the saved filters
filterCatButton = document.getElementById("filterCats");
filterCatButton.addEventListener("click", filter);

// Button to filter the catalogs to only show the one(s) you search for
filterCatButton = document.getElementById("searchCats");
filterCatButton.addEventListener("click", search);

// Button to change the tags/ notes/ reviews to show in a textArea, so they can be copied
textifyButton = document.getElementById("textifyButton");
textifyButton.addEventListener("click", tagView);

isbnsButton = document.getElementById("isbnsButton");
isbnsButton.addEventListener("click", getIsbns);

titleGrabButton = document.getElementById("titleGrabButton");
titleGrabButton.addEventListener("click", getTitleInfo);