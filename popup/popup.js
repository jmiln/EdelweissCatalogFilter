const files = [
    {
        fileName: "filterCats",
        buttonText: "Filter Cats"
    },
    {
        fileName: "searchCats",
        buttonText: "Search Cats"
    },
    {
        fileName: "tagView",
        buttonText: "Change Tags"
    },
    {
        fileName: "getIsbns",
        buttonText: "Get ISBNs"
    },
    {
        fileName: "getTitleListInfo",
        buttonText: "Get Book Info"
    }
]
const popupHtml = document.getElementById("popup-content");

for (const file of files) {
    thisButton = document.createElement("div");
    thisButton.type = "button";
    thisButton.innerHTML = file.buttonText;
    thisButton.className = "button";
    thisButton.addEventListener("click", () => {
        browser.tabs.executeScript({file: `../scripts/${file.fileName}.js`});
    });
    popupHtml.appendChild(thisButton);
}
