<?php
$app->group('/sensors', function () {
	$this->get('' , function ($req, $res, $args) {
	    $sensors = Sensors::all();

		foreach($sensors as $sensor){
            //$sensor->attrs = SensorAttrs::where('sen_id','=',$sensor->sen_id)->get();
			$sensor->attrs;
		}

		$newRes = $res->withHeader(
        'Content-Type',
        'application/json'
        );
		$newRes->write($sensors->toJson());
    	return $newRes;
	});
	$this->get('/[{id}]' , function ($req, $res, $args) {
		$sensor = Sensors::find($args['id']);
		$sensor->attrs;
        var_dump($_GET);
       	$newRes = $res->withHeader(
        'Content-Type',
        'application/json'
        );
		$newRes->write($sensor->toJson());
    	return $newRes;
	});
	$this->post('' , function ($req, $res, $args) {
        $sensor = json_decode($req->getBody());
		foreach($sensor as $key => $val)
		{
		    if($key !='attrs'){
			    $newsensor[$key] = $val;
			}
			else{
		    	foreach($val as $attr){
                    $newAttr['sen_id'] = $sensor->sen_id;
                    $newAttr['key'] = $attr->key;
                    $newAttr['value'] = $attr->value;
                    SensorAttrs::forceCreate($newAttr);
			    }
			}
		}
	    Sensors::forceCreate($newsensor) ;
		return $res;
	});
	$this->put('/[{id}]' , function ($req, $res, $args) {
        $sensor = Sensors::find($args['id']);
        $update_sensor = json_decode($req->getBody());
        foreach($update_sensor as $key => $val)
        {
            if($key != 'attrs'){
                $sensor[$key] = $val;
            }
            else{
		    	foreach($val as $attr){
                    SensorAttrs::where('sen_id',$sensor->sen_id)
                        ->where('key' ,  $attr->key)
                        ->update(['value' => $attr->value]);
                }
            }
        }
        $sensor->save();
		return $res;
    });

	$this->delete('/[{id}]' , function ($req, $res, $args) {
        Sensors::find($args['id'])->delete();
        SensorAttrs::where('sen_id',$args['id'])->delete();
    });
});
