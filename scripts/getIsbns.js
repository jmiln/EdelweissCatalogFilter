function getIsbns() {
    // Get the html chunks that have the isbns in them
    isbnFields = document.querySelectorAll(".pve_sku ")

    if (!isbnFields?.length) {
        // If there were none, alert the user
        alert("I could not find any valid ISBN fields on this page")
    } else {
        // Otherwise, parse out the isbns to just the 13 digit since they seem to have both, comma seperated, and send an alert 
        isbns = [];
        isbnFields.forEach(p => isbns.push(p.innerText.split(",")[0]));
        if (isbns.length) {
            alert(isbns.join("\n"));    
        } else {
            alert("I could not find any ISBNs on this page.")
        }
    }
}

getIsbns();