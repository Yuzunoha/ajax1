'use strict';

const p = console.log;
const url = 'http://localhost:20280/api/json1';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const jsPost = (body) => {
  const method = 'POST';
  return fetch(url, { method, headers, body })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => err);
};

const jsGet = async () => {
  const method = 'GET';
  return await fetch(url, { method, headers })
    .then((res) => res.json())
    .catch(p);
};

const jsonToObjects = (json) => {
  const a = [];
  for (let i = 0; i < json.length; i++) {
    a.push(JSON.parse(json[i].json));
  }
  return a;
};

const generateThTd = (thortd, text) => {
  const thtd = document.createElement(thortd);
  const textNode = document.createTextNode(text);
  thtd.appendChild(textNode);
  return thtd;
};

const generateTable = (objects) => {
  const div = document.getElementById('div1');
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

const send = () => {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const content = document.getElementById('content').value;
  const obj = { name, address, content };
  const json = JSON.stringify(obj);
  jsPost(json).then(() => {
    jsGet().then((json) => {
      const objects = jsonToObjects(json);
      generateTable(objects);
    });
  });
};
