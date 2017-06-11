function clickNode(divId) {
    var clickedDiv = $("#" + divId);
    if (clickedDiv.css("display") == "none") {
        clickedDiv.css("display","block");
    } else {
        clickedDiv.css("display","none");
    }
}

function clickNode2() {
    var request = new XMLHttpRequest();
    request.open("GET", "/web/json/apg4.json", false);
    request.send(null);
    if (request.status == 200) {
        eval("var apg4 = " + request.responseText);
        alert(apg4);
    }
    alert("clicked");
}