<?php

use Illuminate\Database\Eloquent\Model;

class CommuCfgs extends Model 
{
    protected $table = 'sys_cfg_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
}

class DebugTmpls extends Model 
{
    protected $table = 'debug_tmpl_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
}

class Sensors extends Model 
{
    protected $table = 'sen_cfg_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
	protected $primaryKey = 'sen_id';
	public function attrs()
	{
	    return $this->hasMany('SensorAttrs','sen_id','sen_id');
	}
}

class SensorAttrs extends Model 
{
    protected $table = 'sen_attr_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
	protected $hidden = ['sen_id'];
	public function sensor()
	{
	    return $this->belongsTo('Sensors','sen_id','sen_id');

	}
}

class SensorTypes extends Model 
{
    protected $table = 'sen_type_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
}

class AttrTmpls extends Model 
{
    protected $table = 'attr_tmpl_tbl';
	protected $connection = 'cfg_monitor_db';
	public $timestamps = false ;
}
