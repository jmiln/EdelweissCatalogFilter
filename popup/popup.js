function filter() {
    browser.tabs.executeScript({file: "../filterCats.js"});
}

function search() {
    browser.tabs.executeScript({file: "../searchCats.js"});
}

function tagView() {
    browser.tabs.executeScript({file: "../tagView.js"});
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