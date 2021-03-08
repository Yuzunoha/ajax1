'use strict';

const main = async () => {
  const json = await jsGet();
  const objects = jsonToObjects(json);
  generateTable(objects);
};

window.addEventListener('load', main);
