defaultRegex = [
    "// Anything with a date between 2000 and 2017",
    "201[0-7]",
    "200[0-9]",
    "// Any catalog from Spring/ Summer/ Fall/ Winter 00 to 17",
    "(Spring|Summer|Fall|Winter)(0[0-9]|1[0-7])",
    "(Sp|S|F|FL|W)(0[0-9]|1[0-7])"
];

function saveOptions(e) {
    e.preventDefault();
    
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
        document.querySelector("#regex").value = result.regex ? result.regex.join("\n") : defaultRegex.join("\n");
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("regex");
    getting.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);