function clickNode(divId) {
    var clickedDiv = $("#" + divId);
    if (clickedDiv.css("display") == "none") {
        clickedDiv.css("display","block");
    } else {
        clickedDiv.css("display","none");
    }
}

var param = {
    "apg4": null
};

// クリック処理
// @param divId クリックされたdivのID
function clickNode2(divId) {
    if (param.apg4 === null) {
        param.apg4 = loadJson("apg4");
    }
    
    var contents = "";
    for (var i = 0; i < param.apg4[divId].length; i++) {
        contents += param.apg4[divId][i] + " ";
    }
    alert(contents);
}

// JSONファイルを読み込む処理
// @param fileName ファイル名を表す文字列
function loadJson(fileName) {
    var contents;
    var request = new XMLHttpRequest();
    request.open("GET", "/web/json/biol/"+fileName+".json", false);
    request.send(null);
    if (request.status == 200) {
        contents = JSON.parse(request.responseText);
    }
    return contents;
}