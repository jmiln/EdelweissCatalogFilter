function filterCats(filters) {
    // Make sure the list is available before trying to mess with it
    if (!document.getElementById("catalogSelect")) {
        alert("No list found, make sure you have the list of catalogs up.");
    } else {
        // Load all the options
        opts = document.getElementById("catalogSelect").options;
        oldLen = opts.length;
        
        // Make sure there is at least one string to filter on
        if (!filters || !filters.length) {
            return alert("No filters loaded to shorten list.\nMake sure you have something in the settings to filter.");
        }

        // Filter out all the lists we don't want (Test it with & without extra symbols)
        newOpts = Object.keys(opts).filter(o => 
            !(new RegExp(filters.join("|"), "gi").test(opts[o].innerHTML.replace(/[\W_]+/g, ""))) &&
            !(new RegExp(filters.join("|"), "gi").test(opts[o].innerHTML))
        ).map(o => opts[o]);
        
        // Load up all the ones we want to show, then save em back 
        document.getElementById("catalogSelect").innerHTML = "";
        catSelect = document.getElementById("catalogSelect");
        out = "";
        for (opt in newOpts) {
            var option = document.createElement('option');
            option.value = newOpts[opt].value;
            option.text = newOpts[opt].text;
             
            catSelect.appendChild(option);
        }
        alert("List shortened from " + oldLen + " to " + newOpts.length);
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    var regex = [];
    if (item.regex) {
        regex = item.regex.filter(r => r.trim().length && !r.trim().startsWith("//")).map(r => r.trim());
    }
    filterCats(regex);
}

var getting = browser.storage.sync.get("regex");
getting.then(onGot, onError);