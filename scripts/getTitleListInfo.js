function grabTitleInfo() {
    if (!document.getElementById("listTypeIcon_3").classList.contains("displaySelected")) {
        alert("Please make sure your list is in the condensed mode (The thin horizontal lines, not the grid or thick lines.");
    } else {
        rows = document.querySelectorAll("#tempList1 tr")
        outArr = [];
        rows.forEach(row => {
            const out = [];
            const rowFields = row.querySelectorAll("td");
            const titleAuthPubRows = rowFields[3].querySelectorAll("div")
            const [title, auth, pub] = titleAuthPubRows;
            out.push(
                title.innerText,
                auth.innerText,
                pub.innerText === auth.innerText ? null : pub.innerText
            );

            const bindingIsbnPrice = rowFields[4].querySelectorAll("div");
            const [binding, isbn, datePrice] = bindingIsbnPrice;
            const date = datePrice.innerText.split(",")[0]
            const price = datePrice.innerText.split(",")[1]
            out.push(
                binding?.innerText,
                isbn?.innerText.split("/")[0].trim(),
                `${date}, ${price}`
            );
            outArr.push(out.filter(f => !!f).join("\n"))
        });
        alert(outArr.join("\n\n"));
    }
}

grabTitleInfo()