'use strict';
window.alert('日本の米は世界一')

//画像表示
function unko() {
    document.getElementById("page-header").innerHTML = "<img src = './images/sushi.jpg'>";
}

window.onload = unko();






//文字を置き換える機能
function f(n) {
    let cs = n.childNodes;
    for (let i = 0; i < cs.length; i++) {
        let c = cs[i];
        if (c.nodeType == Node.TEXT_NODE) {
            c.textContent = c.textContent.replace(/Kyutech Moodle/g, "Kyutech Proken Moodle");
        }
        else {
            f(c);
        }
    }
}

window.onload = f(document.body);
