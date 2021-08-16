function filterCats() {
    // Make sure the list is available before trying to mess with it
    if (!document.getElementById("catalogSelect")) {
        alert("No list found, make sure you have the list of catalogs up.");
    } else {
        var searchStr = prompt("What are you looking for?", "");

        // Load all the options
        opts = document.getElementById("catalogSelect").options;
        oldLen = opts.length;
        
        // Make sure there is a string to look for
        if (!searchStr || !searchStr.length) {
            return alert("No search string entered.");
        }

        // Filter out all the lists we don't want (Test it with & without extra symbols)
        newOpts = Object.keys(opts).filter(o => 
            opts[o].innerHTML.toLowerCase().replace(/[\W_]+/g, "").includes(searchStr.replace(/[\W_]+/g, ""))
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
        return alert("List shortened from " + oldLen + " to " + newOpts.length);
    }
}

filterCats();