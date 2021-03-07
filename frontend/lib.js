'use strict';

const jsPost = () => {
  const url = 'http://localhost:20280/api/json1';
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    hello: 'world',
  });
  fetch(url, { method, headers, body })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
};
