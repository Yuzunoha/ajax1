'use strict';

const main = async () => {
  const json = await jsGet();
  generateTable(jsonToObjects(json));
};

window.addEventListener('load', main, false);
