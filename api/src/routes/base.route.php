<?php
$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to use!");
	return $response;
});

$app->get('/test', function ($request, $response, $args) {
    $response->write("Yest!");
	return $response;
});
