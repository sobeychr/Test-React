<?php
/**
 * Created by PhpStorm.
 * User: c_sobey
 * Date: 8/29/2018
 * Time: 10:21 AM
 */
if(!defined('PATH_ROOT')) define('PATH_ROOT', './../');
if(!defined('PATH_PHP')) define('PATH_PHP', PATH_ROOT . 'php/');
require_once PATH_PHP . 'includes.php';

$response = array(
    'text' => 'Test Ajax successful'
);
echo json_encode($response);
die();