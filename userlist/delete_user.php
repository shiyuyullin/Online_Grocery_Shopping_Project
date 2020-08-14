<?php 

    $index = $_COOKIE["deleteUserIndex"];
    $indexToRemove = $index-1;
    //echo $indexToRemove;
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    $dom->load('users.xml');

    $toBeRemoved = $dom->getElementsByTagname('info')->item($indexToRemove);
    $temp = $dom->documentElement;
    $temp->removeChild($toBeRemoved);

    $dom->save("users.xml");

    echo "Order has been successfully deleted!"
?>