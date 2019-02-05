// Use this to just replace the tags section with a textarea with the list copyable
if (!document.getElementById("conContent")) {
    alert("You need to have the tags, notes, or reviews open to use this.");
} else {
    var replacement = [...document.getElementById("conTable").rows]
        .filter(r => r.cells[0].textContent.trim() !== "Row")
        .map(r => r.cells[0].textContent + "	" + r.cells[1].textContent).join("\n");
    
    var input = document.createElement("textarea");
    input.value = replacement;
    input.rows = document.getElementById("conTable").rows.length-2;
    input.cols = 70;
    
    var div = document.getElementById("conContent");
    while( div.childNodes[0] ) {
        div.removeChild( div.childNodes[0] );
    }

    div.appendChild(input);
}