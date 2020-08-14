<?php

    $Customer = $_POST["editName"];
    $Total = $_POST["editTotal"];
    $Order_Number = $_POST["editOrderNumber"];

    $index = $_COOKIE["editIndex"];
    $indexToEdit = $index-1;

    $xml=simplexml_load_file("orders.xml") or die("Error: Cannot create object");
    
    $xml->info[$indexToEdit]->name = $Customer;
    $xml->info[$indexToEdit]->total = $Total;
    $xml->info[$indexToEdit]->order_number = $Order_Number;
    
    $xml -> asXML("orders.xml");

    echo "Information about the order is changed"

?>