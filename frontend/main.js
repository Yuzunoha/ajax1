'use strict';

const main = () => {
  jsGet().then((json) => {
    generateTable(jsonToObjects(json));
  });
};

window.addEventListener('load', main, false);
