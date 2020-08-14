<?php

    $title = $_POST["Title"];
    $price = $_POST["Price"];
    $description = $_POST["Description"];
    $quantity = $_POST["Quantity"];
    $pnumber = $_POST["Product_Number"];

    $index = $_COOKIE["editProductIndex"];
    $indexToEdit = $index-1;

    $xml=simplexml_load_file("products.xml") or die("Error: Cannot create object");
    
    $xml->info[$indexToEdit]->title = $title;
    $xml->info[$indexToEdit]->price = $price;
    $xml->info[$indexToEdit]->description = $description;
    $xml->info[$indexToEdit]->quantity = $quantity;
    $xml->info[$indexToEdit]->product_number = $pnumber;
    
    $xml -> asXML("products.xml");

    echo "Information about the order is changed"

?>