<?php
/**
 * Created by PhpStorm.
 * User: c_sobey
 * Date: 8/29/2018
 * Time: 4:19 PM
 */

//$jsonStr = file_get_contents('./../../public/json/youtube.json');
$jsonStr = file_get_contents('./../../src/json/youtube.json');
$jsonArr = json_decode($jsonStr, true);

echo print_r($jsonStr, true);
echo "\n\n\n";
echo print_r($jsonArr, true);
