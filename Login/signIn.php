<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   
    <link rel="stylesheet" type="text/css" href="../css/HomeAndSignin.css">
    <title>Sign In | Yummy Food</title>
</head>
<body >


    
    <div class="header">
        <h1 class="white">Yummy Food</h1>
        
        </div>
      </div>
      
      <div class="topnav">
        <a href="#" class="bold">Home</a>
        <a href="#" class="bold">FLYER</a>
        <a href="#" class="bold">DEAL OF TODAY</a>
        
      </div>                         
                   



      <div class="headersignin ">
        <h1 class="welmesgsignIn" >Sign In </h1>
       
          
        
      </div>


    <div class="container"   >
        
      <div class="loginbox" >
          
       <form style="width: 50px;  "  action="signIn.php" method="get">
        <div>

            <input placeholder="example@email.com" type="email" id="Enteremail" name="EmailUser" >
        </div>



        <div class="container">
            

            <input placeholder="Password" type="password" id="Enterpas" name="PassUser">
        </div>

        <div class="container">
            <br/>

            <button class="btnlogin" id="SigninBtn" onclick="LoginValidate()" name="BtnSignIn"> Login</button>
        </div>



          <div style="width: 200px;">
              <input type="checkbox" onclick="EnablingForget()" id="Forgetbtn" value="uncheked"><span class="forgetForm">Forget the password</span> </input>
          </div>


     
         </form>
  </div>
  </div>


</div>




<?php



function alert($msg) 
{
    echo "<script type='text/javascript'>alert('$msg');</script>";
}
function SubmitLogIn()
{


    if(isset($_GET["BtnSignIn"]))
    {

            $getemail=$_GET['EmailUser'];


            $getpassword=$_GET['PassUser'];




            $Loadxml=simplexml_load_file("../SignUp/Sign.Up.xml");
            $ChkEmailVal=0;
            foreach($Loadxml->children() as $users)
            {
                
                        if($users->email==$getemail)
                        {
                
                            if($users->password==$getpassword)
                            {
                                if($users->admin=="yes")
                                header('Location:../orderList/orderList.html');
                                if(($users->admin=="no")
                                   header('Location:../Home/Home.html');
                            alert("You have logged in");
                            $ChkEmailVal=1;   
                          
                            break;
                            }
                            else
                            alert(" not valid pas");
                
                        }
                    
                
                
            
                

            }
            if($ChkEmailVal==0)
            {
                alert("email not found");
            }
    }


}
SubmitLogIn();
?>


<div class="container"   >
    
  <div class="loginbox" >
      
   <form style="width: 50px; " action="signIn.php" method="get">
    <div>

        <input placeholder="confirm Email" type="email" id="logConf" disabled name="VEmail">
    </div>





    <div>
        

        <input placeholder="new password" type="password" disabled id="NewPass" name="CNewPass">
    </div>
    <div>
        

        <input placeholder="confirm new password" type="password" disabled id="ConfPass" name="ConfirmPass">
    </div>

    <div>
        <br/>

        <button class="btnlogin" disabled id="subBtn" onclick="CheckeValidatResubmitInfo()" name="BtnSubRest"> submit</button>
    </div>



      

 
     </form>
</div>
</div>

<?php

function ResetPassword()
{
        $ChkConEmail=0;
        if(isset($_GET["BtnSubRest"]))
        {
            $loadXml=simplexml_load_file("../SignUp/Sign.Up.xml");

            $vEmail=$_GET['VEmail'];
            $newPassword=$_GET['CNewPass'];
            $confPassword=$_GET['ConfirmPass'];

            foreach($loadXml->children() as $user)
            {
                if($user->email==$vEmail)
                {
                    if($newPassword==$confPassword )
                        {
                            $user->password=$newPassword;
                            $loadXml->asXML("Sign.Up.xml");
                            $ChkConEmail=1;
                            alert("Congratulations!!! Your password has been restted");
                         
                        break;

                            
                        }

                        else
                        {
                            $ChkConEmail=-1;
                        }





                }





            }
        

            if($ChkConEmail==0 &&  $ChkConEmail!=-1)
                    {
                        alert("Email not exist!!!!");
                    }
 }
  

}
ResetPassword();

?>






      <footer class="loginfooter ">

            <div class="footer">
                <div class="generalinf">
                <p><a href="#">FIND</a> &emsp;&emsp;&emsp;&emsp;&emsp;  <a href="#">FIND LOCATION</a> &emsp;&emsp;&emsp;&emsp;&emsp; <a href="#">HELP CENTER</a> </p>

                </div>
                <div class="fontF">
                <p>Product &emsp;&emsp;&emsp;&emsp;&emsp; Support & Resources  &emsp;&emsp;&emsp;&emsp;&emsp; Partnerships</p>
                </div>
            </div>  

</footer>  



<script src="SignInVal.js">


</script>
</body>
</html>
