'use strict';
window.alert('プロ研が作った拡張機能！！')

const imgup = () => {
    let counts = document.querySelectorAll('d-flex flex-wrap');

    counts.innerHTML = "<img src = 'images/proken_icon.png'>"
}


window.addEventListener('load', () => imgup(), false);