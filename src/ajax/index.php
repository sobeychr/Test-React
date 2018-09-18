<?php
/**
 * Created by PhpStorm.
 * User: c_sobey
 * Date: 8/30/2018
 * Time: 9:21 AM
 */

$page = $_SERVER['PATH_INFO'] ?? '';
$page = substr($page, 1) . '.php';

if(file_exists($page)) {
    
    $protocol = 'http';
    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']) {
        $protocol .= 's';
    }
    
    $headers = array(
        'Access-Control-Allow-Methods' => 'POST, GET',
        'Access-Control-Allow-Origin' => $protocol . '://localhost:3000',
        'Content-Type' => 'text/plain; charset=UTF-8',
    );
    foreach($headers as $key=>$value) {
        header($key . ': ' . $value);
    }
    
    require_once $page;
}
else {
    http_response_code(404);
    echo '<h1>Page not found</h1><p>'.$page.'</p>';
}

die();
