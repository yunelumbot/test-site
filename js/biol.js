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
// @param elementId クリックされた要素のID
function clickNode2(elementId) {
    if (param.apg4 === null) {
        param.apg4 = loadJson("apg4");
    }
    
    // 子要素追加対象
    var element = $("#" + elementId);
    for (var i = 0; i < param.apg4[elementId].length; i++) {
        // 子要素を作成
        var childDiv = document.createElement("div");
        childDiv.setAttribute("id", param.apg4[elementId][i]);
//        childDiv.setAttribute("style", "display:none");
        
        // 子要素を追加
        element.appendChild(childDiv);
    }
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