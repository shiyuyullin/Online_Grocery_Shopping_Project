<?php
    
    $Name = $_POST["name"];
    $Address = $_POST["address"];
    $Postal = $_POST["postal"];
    $Email = $_POST["email"];
    $Id = $_POST["id"];


    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    $dom->load('users.xml');

    $rootTag = $dom->getElementsByTagname("users")->item(0);
    $userElement = $dom->createElement('info');
      $nam = $dom->createElement("name", $Name);
       $add = $dom->createElement("address", $Address);
       $pos = $dom->createElement("postal", $Postal);
       $ema = $dom->createElement("email", $Email);
       $id = $dom->createElement("id", $Id);

       $userElement->appendChild($nam);
       $userElement->appendChild($add);
       $userElement->appendChild($pos);
       $userElement->appendChild($ema);
       $userElement->appendChild($id);

    $rootTag->appendChild($userElement);
    $dom -> save("users.xml");
    
    echo "The request is submitted to the server!";

?>