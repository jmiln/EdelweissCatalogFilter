const files = ["filterCats", "searchCats", "tagView", "getIsbns", "getTitleListInfo"];

for (const file of files) {
    thisButton = document.getElementById(file);
    thisButton.addEventListener("click", () => {
        browser.tabs.executeScript({file: `../scripts/${file}.js`});
    })
}
