<?php
$app = new Slim\App();
use Illuminate\Database\Capsule\Manager as Capsule;

if (file_exists(API . 'config' . DS . 'database.config.php')) {
	$db_cfg = include API . "config" . DS . 'database.config.php' ;
    $capsule = new Capsule;
	foreach($db_cfg as $key => $value){
        $capsule->addConnection($value,$key);
	}
    $capsule->bootEloquent();
    $capsule->setAsGlobal();
} else {
    die("<pre>Rename 'config/database.config.php.install' to 'config/database.config.php' and configure your connection</pre>");
}

foreach (glob(API . 'src' . DS . 'models' . DS . '*.php') as $filename) {
    require_once $filename;
}	
/**
 * Load all libs
 */
foreach (glob(API . 'src' . DS . 'libs' . DS . '*.php') as $filename) {
    require_once $filename;
}	
