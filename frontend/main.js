'use strict';

const main = () => {
  const p1 = document.getElementById('p1');
  jsPost();
  jsGet().then((json) => {
    p1.innerHTML = JSON.stringify(json);
  });
};

window.addEventListener('load', main, false);
