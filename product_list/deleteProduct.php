<?php 

    $index = $_COOKIE["deleteProductIndex"];
    $indexToRemove = $index-1;
    //echo $indexToRemove;
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    $dom->load('products.xml');

    $toBeRemoved = $dom->getElementsByTagname('info')->item($indexToRemove);
    $temp = $dom->documentElement;
    $temp->removeChild($toBeRemoved);

    $dom->save("products.xml");

    echo "Order has been successfully deleted!"
?>