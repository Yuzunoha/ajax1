'use strict';

const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_week/130000.json';

const test1 = () => {
  fetch(url)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .then((json) => {
      console.log(json); // {publishingOffice: "気象庁", ...
    });
};

const test2 = () => {
  fetch(url)
    .then((res) => {
      const json = res.json();
      return { json };
    })
    .then(({ json }) => {
      console.log(json); // Promise {<pending>}
    });
};

const test3 = () => {
  fetch(url)
    .then((res) => {
      const json = res.json();
      return [json];
    })
    .then((arr) => {
      const json = arr[0];
      console.log(json); // Promise {<pending>}
    });
};

test1();
test2();
test3();
