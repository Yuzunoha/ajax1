'use strict';

const main = () => {
  const p1 = document.getElementById('p1');
  p1.innerHTML = 'jsから編集しました。';
  jsPost();
};

window.addEventListener('load', main, false);
