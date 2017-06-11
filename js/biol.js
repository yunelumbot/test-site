function clickNode(divId) {
    var clickedDiv = $("#" + divId);
    if (clickedDiv.css("display") == "none") {
        clickedDiv.css("display","block");
    } else {
        clickedDiv.css("display","none");
    }
}

function clickNode2(divId) {
    var request = new XMLHttpRequest();
    request.open("GET", "/web/json/biol/apg4.json", false);
    request.send(null);
    if (request.status == 200) {
        var apg4;
        eval("apg4 = " + request.responseText);
        var contents = "";
        for (var i = 0; i < apg4[divId].length; i++) {
            contents += apg4[divId][i] + " ";
        }
        alert(contents);
    }
}