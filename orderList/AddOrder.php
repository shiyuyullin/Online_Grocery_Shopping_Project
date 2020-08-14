
<?php
    
    $Customer = $_POST["Customer"];
    $Total = $_POST["Total"];
    $State = 'Pending';
    $Order_Number = $_POST["orderNumber"];
    $Date = $_POST["date"];
    
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    $dom->load('orders.xml');

    $rootTag = $dom->getElementsByTagname("customer")->item(0);
    $customerElement = $dom->createElement('info');
        $name = $dom->createElement("name", $Customer);
        $total = $dom->createElement("total", $Total);
        $state = $dom->createElement("state", 'Pending');
        $orderNumber = $dom->createElement("order_number", $Order_Number);
        $date = $dom->createElement("date", $Date);

        $customerElement->appendChild($name);
        $customerElement->appendChild($total);
        $customerElement->appendChild($state);
        $customerElement->appendChild($orderNumber);
        $customerElement->appendChild($date);


    $rootTag->appendChild($customerElement);
    $dom -> save("orders.xml");
    
    echo "The request is submitted to the server!"

 ?> 


 
  


