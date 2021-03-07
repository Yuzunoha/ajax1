'use strict';

const generateThTd = (thortd, text) => {
  const thtd = document.createElement(thortd);
  const textNode = document.createTextNode(text);
  thtd.appendChild(textNode);
  return thtd;
};

const generateTable = (div, objects) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const trHeader = document.createElement('tr');
  trHeader.appendChild(generateThTd('th', 'name'));
  trHeader.appendChild(generateThTd('th', 'address'));
  trHeader.appendChild(generateThTd('th', 'content'));
  tbody.appendChild(trHeader);
  for (const object of objects) {
    const tr = document.createElement('tr');
    tr.appendChild(generateThTd('td', object.name));
    tr.appendChild(generateThTd('td', object.address));
    tr.appendChild(generateThTd('td', object.content));
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  table.setAttribute('border', '1');
  div1.innerHTML = '';
  div.appendChild(table);
};

const jsonToObjects = (json) => {
  const a = [];
  for (let i = 0; i < json.length; i++) {
    a.push(JSON.parse(json[i].json));
  }
  return a;
};

const main = () => {
  const div1 = document.getElementById('div1');
  jsPost();
  jsGet().then((json) => {
    const objects = jsonToObjects(json);
    generateTable(div1, objects);
    console.log(json);
  });
};

window.addEventListener('load', main, false);
