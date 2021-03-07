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
  $data = $request->getParsedBody() ?? []; // post body
  if (in_array('', [$data['name'], $data['address'], $data['content'],])) {
    return $response->withJson('400 Bad Request', 400, JSON_UNESCAPED_UNICODE);
  }
  $sql = 'insert into json1 (json) values (:json)';
  $json = json_encode($data, JSON_UNESCAPED_UNICODE);
  $param = [':json' => $json];
  $stmt = pdo()->prepare($sql);
  $result = $stmt->execute($param);
  $statusCode = $result ? 200 : 500;
  return $response->withJson($result, $statusCode, JSON_UNESCAPED_UNICODE);
});

$app->run();
