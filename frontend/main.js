'use strict';

const main = async () => {
  const objects = jsonToObjects(await jsGet());
  generateTable(objects);
};

window.addEventListener('load', main);
