var biol = {
    param : {
        "apg4": null
    },
    
    // クリック処理
    // @param divId 処理対象のdivのID
    clickNode : function(divId) {
        if (this.param.apg4 === null) {
            this.param.apg4 = this.loadJson("apg4");
        }
        
        // 要素追加対象
        var element = $("#" + divId);
        // スタイルを変更
        if (element.css("display") == "none") {
            // 非表示の場合は、表示する
            element.css("display","block");
            if (element.children().length !== 0) {
                // 子要素を1件以上取得済みの場合は処理を終了する
                return;
            }
        } else {
            // 表示中の場合は、非表示に変更し処理を終了する
            element.css("display","none");
            return;
        }
        
        element.css("display","block");
        // 要素(ul)を作成
        var newUl = $("<ul></ul>");
        // 要素(ul)を追加
        element.append(newUl);
        for (var i = 0; i < this.param.apg4[divId].length; i++) {
            // 子要素(li)を作成
            var newLi = $("<li></li>");
            
            // 子要素(a)を作成し、liに追加
            var newA = $("<a>" + this.param.apg4[divId][i] + "</a>");
            newA.attr("onclick", "clickNode('biol." + this.param.apg4[divId][i] +"')");
            newLi.append(newA);
            // 子要素(div)を作成し、liに追加
            var newDiv = $("<div id='" + this.param.apg4[divId][i] + "'></div>");
            newDiv.attr("style", "display:none");
            newLi.append(newDiv);
            
            // 子要素(li)を追加
            newUl.append(newLi);
        }
    },
    
    // JSONファイルを読み込む処理
    // @param fileName ファイル名を表す文字列
    loadJson : function(fileName) {
        var contents;
        var request = new XMLHttpRequest();
        request.open("GET", "/web/json/biol/"+fileName+".json", false);
        request.send(null);
        if (request.status == 200) {
            contents = JSON.parse(request.responseText);
        }
        return contents;
    }
};