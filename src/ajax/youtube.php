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

// Updates the JSON data
$jsonStr = $_POST['json'] ?? '';
$jsonArr = json_decode($jsonStr);

if(is_array($jsonArr) && array_filter($jsonArr)) {
    $jsonPath = './../json/youtube.json';
    $jsonNew  = json_encode($jsonArr, JSON_PRETTY_PRINT);
    file_put_contents($jsonPath, $jsonNew);
    die($jsonNew);
}

// Loads data from a web page
$url = $_POST['url'] ?? '';
if($url) {
    $context = stream_context_create(array(
        'http' => array(
            'method' => 'GET',
            'header' => 'Content-Type: text/plain'
        )
    ));
    $urlLoad = 'https://www.youtube.com/oembed?format=json&amp;url=' . urlencode($url);
    $content = file_get_contents($urlLoad, false, $context);
    
    // Parses content
    $jsonArr = json_decode($content, true);
    if(is_array($jsonArr) && array_filter($jsonArr)) {
        $video = $jsonArr['thumbnail_url'] ?? '';
        $video = strstr($video, 'vi/', false);
        $video = substr($video, 3);
        $video = strstr($video, '/', true);
        
        $title = $jsonArr['title'] ?? '';
        
        $result = array(
            'video' => $video,
            'name'  => $title,
            'band'  => '',
        );
        
        die(json_encode($result));
    }
    
    die();
}

die();
