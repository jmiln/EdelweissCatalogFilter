function filter() {
    browser.tabs.executeScript({file: "../filterCats.js"});
}

function tagView() {
    browser.tabs.executeScript({file: "../tagView.js"});
}

// Button to reset the regex to the default based on defaultRegex at the top of this file
filterCatButton = document.getElementById("filterCats");
filterCatButton.addEventListener("click", filter);

// Save button to save the regex 
textifyButton = document.getElementById("textifyButton")
textifyButton.addEventListener("click", tagView);