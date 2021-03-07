'use strict';

const generateTable = (div) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  for (let j = 0; j < 2; j++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 2; i++) {
      const td = document.createElement('td');
      const textNode = document.createTextNode('cell is row ' + j + ', column ' + i);
      td.appendChild(textNode);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  table.setAttribute('border', '1');
  div1.innerHTML = '';
  div.appendChild(table);
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
