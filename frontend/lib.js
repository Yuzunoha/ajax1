'use strict';

const jsPost = () => {
  const url = 'http://localhost:20280/api/json1';
  const obj = { hello: 'world' };
  const method = 'POST';
  const body = JSON.stringify(obj);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  fetch(url, { method, headers, body })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
};
