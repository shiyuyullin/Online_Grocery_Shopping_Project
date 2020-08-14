

<?php
    
    $title = $_POST["Title"];
    $price = $_POST["Price"];
    $description = $_POST["Description"];
    $quantity = $_POST["Quantity"];
    $productNumber = $_POST["producNum"];
    
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    $dom->load('products.xml');

    $rootTag = $dom->getElementsByTagname("product")->item(0);
    $productElement = $dom->createElement('info');
        $tit = $dom->createElement("title", $title);
        $tot = $dom->createElement("price", $price);
        $desc = $dom->createElement("description", $description);
        $quanti = $dom->createElement("quantity", $quantity);
        $produ = $dom->createElement("product_number", $productNumber);

        $productElement->appendChild($tit);
        $productElement->appendChild($tot);
        $productElement->appendChild($desc);
        $productElement->appendChild($quanti);
        $productElement->appendChild($produ);


    $rootTag->appendChild($productElement);
    $dom -> save("products.xml");
    
    echo "The request is submitted to the server!"

 ?> 
