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
    <?php
            $firstName   = $_POST["firstName"];
            $lastName    = $_POST["lastName"];
            $companyName = $_POST["companyName"];
            $postalCode  = $_POST["postalCode"];
            $email       = $_POST["email"];
            $title       = $_POST["title"];
            $password    = $_POST["password"];

            $found = FALSE;
            $users = array();
            $count = 0;
            if(file_exists('Sign.Up.xml'))
            {
            $XMLReader = new XMLReader();
            $XMLReader->open('Sign.Up.xml');
            while ($XMLReader->read()) {
                if ($XMLReader->name == "firstName") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["firstName"] = $XMLReader->value;
                    }
                }
                if ($XMLReader->name == "lastName") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["lastName"] = $XMLReader->value;
                    }
                }

                if ($XMLReader->name == "companyName") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["companyName"] = $XMLReader->value;
                    }
                }
                if ($XMLReader->name == "postalCode") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["postalCode"] = $XMLReader->value;
                    }
                }
                if ($XMLReader->name == "email") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["email"] = $XMLReader->value;
                        if ($XMLReader->value == $email) {
                            $found = TRUE;
                        }
                    }
                }
                if ($XMLReader->name == "title") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["title"] = $XMLReader->value;
                    }
                }
                if ($XMLReader->name == "password") {
                    $XMLReader->read();
                    if ($XMLReader->hasValue) {
                        $users[$count]["password"] = $XMLReader->value;
                        $count++;
                    }
                }
            }
            if (!$XMLReader->close())
                echo "Fatal error";
            }
            //If the email isnt found then lets add it to the xml file
            if (!$found) {
                $users[$count]["firstName"]   = $firstName;
                $users[$count]["lastName"]    = $lastName;
                $users[$count]["companyName"] = $companyName;
                $users[$count]["postalCode"]  = $postalCode;
                $users[$count]["email"]       = $email;
                $users[$count]["title"]       = $title;
                $users[$count]["password"]    = $password;

                $xml = new XMLWriter();
                //$xml->setIndent(TRUE);
                $xml->openUri("Sign.Up.xml");
                $xml->startDocument('1.0', 'utf-8');
                $xml->startElement("Info");

                foreach ($users as $uk => $uv) {
                    $xml->startElement("User");
                    foreach ($uv as $k => $v) {
                        $xml->writeElement($k, $v);
                    }
                    $xml->endElement();
                }

                $xml->endElement();
                echo "Email successfully registered.";
            }
            else
                echo "Email already in use, please try again.";

        ?>
    <h3 style="color:black">Thank you for signing up.
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