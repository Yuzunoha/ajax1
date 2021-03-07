<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require __DIR__ . '/../vendor/autoload.php';

function pdo()
{
  $dsn = 'mysql:dbname=docker_db;host=mysql';
  $user = 'docker_db_user';
  $password = 'docker_db_user_pass';
  $pdo = new PDO($dsn, $user, $password);
  return $pdo;
}

$app = new \Slim\App;

$app->add(function ($req, $res, $next) {
  $response = $next($req, $res);
  return $response
    ->withHeader('Access-Control-Allow-Origin', '*')
    ->withHeader('Access-Control-Allow-Headers', '*')
    ->withHeader('Access-Control-Allow-Methods', '*');
});

$app->get('/api/json1', function (Request $request, Response $response) {
  $sql = 'select * from json1';
  $sth = pdo()->prepare($sql);
  $sth->execute();
  $data = $sth->fetchAll(PDO::FETCH_ASSOC);
  return $response->withJson($data, 200, JSON_UNESCAPED_UNICODE);
});

$app->post('/api/json1', function (Request $request, Response $response) {
  return $response->withJson('準備中', 200, JSON_UNESCAPED_UNICODE);
});

$app->run();
