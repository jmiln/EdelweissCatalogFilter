defaultRegex = [
    "// Anything with a date between 2000 and 2017",
    "201[0-7]",
    "200[0-9]",
    "",
    "// Any catalog from Spring/ Summer/ Fall/ Winter 00 to 17",
    "(Spring|Summer|Fall|Winter)(0[0-9]|1[0-8])",
    "(Sp|S|F|FL|W)(0[0-9]|1[0-8])"
];

function saveOptions() {    
    regex = document.querySelector("#regex").value;
    if (regex && regex.length) {
        regex = regex.split("\n");
    } else {
        regex = [];
    }
    browser.storage.sync.set({
        regex: regex
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        // If it's got some stored, then use that. Else use the default
        document.getElementById("regex").value = result.regex ? result.regex.join("\n") : defaultRegex.join("\n");
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("regex");
    getting.then(setCurrentChoice, onError);
}

function resetDefault() {
    if (confirm('Are you sure you want to reset this?\nThis will remove any changes you\'ve made.')) {
        document.getElementById("regex").value = defaultRegex.join("\n");
    }
}

// Button to reset the regex to the default based on defaultRegex at the top of this file
resetButton = document.getElementById("resetDefault");
resetButton.addEventListener("click", resetDefault);

// Save button to save the regex 
saveButton = document.getElementById("saveRegex")
saveButton.addEventListener("click", saveOptions);

// Restore whatever saved regex is there when the page is loaded
document.addEventListener("DOMContentLoaded", restoreOptions);