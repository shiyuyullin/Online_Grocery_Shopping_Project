<!DOCTYPE html>
<html>

<head>
    <title>Sing-Up Page | Our Store</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/aisle_style.css">
    <link rel="stylesheet" type="text/css" href="../css/sign_up.css">
</head>

<body>

    <div class="header">
        <h1 class="white">YUMMY FOODS</h1>
        <div class="searchBar">
            <form action="">
                <input type="text" placeholder="Search..">
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    <div class="topnav">
        <a href="../Home/Home.html" class="bold">HOME</a>
        <a href="#" class="bold">ALL PRODUCTS</a>
        <a href="#" class="bold">FLYER</a>
        <a href="#" class="bold">DEAL OF TODAY</a>
        <a href="#" class="bold">RECOMMANDED COMBO</a>
    </div>

    <div class="row">
        <h1 class="message">Sign-Up Successful</h1>
    </div>
    <div><?php
            $firstName = $_POST["firstName"];
            $lastName = $_POST["lastName"];
            $companyName = $_POST["companyName"];
            $postalCode = $_POST["postalCode"];
            $email = $_POST["email"];
            $title = $_POST["title"];
            $password = $_POST["password"];

            $userData  = array("firstName" => $firstName, "lastName" => $lastName,
                                "companyName"=>$companyName, "postalCode"=>$postalCode ,
                                "email"=>$email, "title"=>$title, "password"=>$password);

            if(!file_exists("$firstName.$lastName".".Sign.Up.xml"))
            {
            $xml = new XMLWriter();
            //$xml->setIndent(TRUE);
            $xml->openUri("$firstName.$lastName".".Sign.Up.xml");
            $xml->startDocument('1.0', 'utf-8');
            $xml->startElement("Info");
            $xml->startElement("User");
            foreach($userData as $k => $v)
            {
                //$xml->startElement($k);
                $xml->writeElement($k, $v);  
               // $xml->endElement();
            }
            $xml->endElement();
            $xml->endElement();
            }



    ?></div>
     <h3 style="color:black">Thank you for signing up, your account has been registered.
            <p style="margin: 25px;"></p>
        </h3>
    <p class="margin"></p>

    <div class="footer">
        <div class="generalinf">
            <p><a href="#">FIND</a> &emsp;&emsp;&emsp;&emsp;&emsp; <a href="#">FIND LOCATION</a>
                &emsp;&emsp;&emsp;&emsp;&emsp; <a href="#">HELP CENTER</a> </p>

        </div>
        <div class="fontF">
            <p>Product &emsp;&emsp;&emsp;&emsp;&emsp; Support & Resources &emsp;&emsp;&emsp;&emsp;&emsp; Partnerships
            </p>
        </div>
    </div>
    <script src="../js/sign_up_validation.js"></script>
</body>

</html>