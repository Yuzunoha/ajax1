'use strict';

const generateTable = (div) => {
  // body への参照を取得します
  var mybody = document.getElementsByTagName('body')[0];

  // <table> と <tbody> 要素を生成します
  const mytable = document.createElement('table');
  const mytablebody = document.createElement('tbody');

  // 全てのセルを生成します
  for (var j = 0; j < 2; j++) {
    // <tr> 要素を生成します
    const mycurrent_row = document.createElement('tr');

    for (var i = 0; i < 2; i++) {
      // <td> 要素を生成します
      const mycurrent_cell = document.createElement('td');
      // テキストノードを生成します
      const currenttext = document.createTextNode('cell is row ' + j + ', column ' + i);
      // 生成したテキストノードを <td> セルへと付加します
      mycurrent_cell.appendChild(currenttext);
      // その <td> セルを <tr> 行へと付加します
      mycurrent_row.appendChild(mycurrent_cell);
    }
    // その <tr> 行を <tbody> へと付加します
    mytablebody.appendChild(mycurrent_row);
  }

  // <tbody> を <table> へと付加します
  mytable.appendChild(mytablebody);
  // mytable の border 属性を 2 に設定します
  mytable.setAttribute('border', '2');
  // <table> を <body> へと付加します
  div1.innerHTML = '';
  div.appendChild(mytable);
};

const main = () => {
  const div1 = document.getElementById('div1');
  jsPost();
  jsGet().then((json) => {
    generateTable(div1);
    console.log(json);
  });
};

window.addEventListener('load', main, false);
