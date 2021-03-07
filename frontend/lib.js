'use strict';

const url = 'http://localhost:20280/api/json1';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const jsPost = () => {
  const method = 'POST';
  const body = JSON.stringify({
    hello: 'world',
  });
  return fetch(url, { method, headers, body })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
};

const jsGet = () => {
  const method = 'GET';
  return fetch(url, { method, headers })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => err);
};

const send = () => {
  alert('推された');
};
