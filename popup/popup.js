const files = [
    {
        fileName: "filterCats",
        buttonText: "Filter Cats",
        description: "Filter the categories available for you to choose from"
    },
    {
        fileName: "searchCats",
        buttonText: "Search Cats",
        description: "Search within the categories for something specific"
    },
    {
        fileName: "tagView",
        buttonText: "Change Tags",
        description: "When checking the notes & tags (The little pencil button), this will make it so it's able to be copied"
    },
    {
        fileName: "getIsbns",
        buttonText: "Get ISBNs",
        description: "Grabs the ISBNs and makes them able to be copied easily"
    },
    {
        fileName: "getTitleListInfo",
        buttonText: "Get Book Info",
        description: "Grabs the book info (Title, author, publisher, date, price...) and makes them easier to copy"
    }
]
const popupHtml = document.getElementById("popup-content");

for (const file of files) {
    thisButton = document.createElement("div");
    thisButton.type = "button";
    thisButton.innerHTML = file.buttonText;
    thisButton.className = "button";
    if (file.description) {
        thisButton.title = file.description;
    }
    thisButton.addEventListener("click", () => {
        browser.tabs.executeScript({file: `../scripts/${file.fileName}.js`});
    });
    popupHtml.appendChild(thisButton);
}
