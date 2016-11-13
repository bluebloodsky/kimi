<?php
$app->group('/img', function () {
	$this->get('/[{id}]' , function ($req, $res, $args) {
		$location = "D:/web/kimi/api/image/1.gif";		
       	$newRes = $res->withHeader(
        'Content-Type',
        'image/jpg'
        );
		$newRes->write(file_get_contents($location));
    	return $newRes;
	});
});


$app->group('/video', function () {
    $this->get('/[{id}]' , function ($req, $res, $args) {
        $location = "D:/web/kimi/api/video/2.mp4";        
        $newRes = $res->withHeader(
        'Content-Type',
        'video/mp4'
        );
        $newRes->write(file_get_contents($location));
        return $newRes;
    });
});
