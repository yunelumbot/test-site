function clickNode(divId) {
    var clickedDiv = $("#" + divId).style;
    if (clickedDiv.display == 'none') {
        clickedDiv.display = "block";
    } else {
        clickedDiv.display = "none";
    }
}