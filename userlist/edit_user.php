<?php

$Name = $_POST["name"];
$Address = $_POST["address"];
$City = $_POST["city"];
$Postal = $_POST["postal"];
$Email = $_POST["email"];
$Id = $_POST["id"];

$index = $_COOKIE["editUserIndex"];
$indexToEdit = $index-1;

$xml=simplexml_load_file("users.xml") or die("Error: Cannot create object");
    
$xml->info[$indexToEdit]->name = $Name;
$xml->info[$indexToEdit]->address = $Address;
$xml->info[$indexToEdit]->city = $City;
$xml->info[$indexToEdit]->postal = $Postal;
$xml->info[$indexToEdit]->email = $Email;
$xml->info[$indexToEdit]->id = $Id;
    
$xml -> asXML("users.xml");

echo "Information about the order is changed"

?>