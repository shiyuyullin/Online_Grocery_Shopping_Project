function LoginValidate()
{
  var UserEmail=document.getElementById("Enteremail").value;

  var Emailpattern=/(([a-zA-Z0-9])+\@([a-zA-Z])+\.([a-z])+)$/g;

  var password=document.getElementById("Enterpas").value;
  if(!Emailpattern.test(UserEmail))
  {

  alert("Please enter a valid email format");
    
    UserEmail.value=" ";
  }
  if(password.length<8)
  {
    password.value=" ";
    alert("Please password must be 8 characters or more");

  }



}


function EnablingForget()
{

  var chkbox= document.getElementById("Forgetbtn");
  
  if(chkbox.checked == true)
  {
    var x1=document.getElementById("Enteremail").disabled = true;

    var x2=document.getElementById("Enterpas").disabled = true;
    var x3=document.getElementById("SigninBtn").disabled = true;

    var x4=document.getElementById("logConf" ).disabled = false;
  
    var x6=document.getElementById("NewPass" ).disabled = false;
    var x7=document.getElementById("ConfPass" ).disabled = false;
    var x8=document.getElementById("subBtn" ).disabled = false;
    
    

  }
 
  else
  {


    var x1=document.getElementById("Enteremail").disabled = false;

    var x2=document.getElementById("Enterpas").disabled = false;
    var x3=document.getElementById("SigninBtn").disabled = false;

    var x4=document.getElementById("logConf" ).disabled = true;
    var x6=document.getElementById("NewPass" ).disabled = true;
    var x7=document.getElementById("ConfPass" ).disabled = true;
    var x8=document.getElementById("subBtn" ).disabled = true;

  }




}



function ValidateForgetEmail()
{
    if(document.getElementById("Forgetbtn").checked)
    {


        var EmailPattern=/(([a-zA-Z0-9])+\@([a-zA-Z])+\.([a-z])+)$/g;
        var newPass=document.getElementById("NewPass").value;
        var confnewPas=document.getElementById("ConfPass").value;
        var Confemail=document.getElementById("logConf" ).value;

        if(EmailPattern.test(Confemail))
        {


            if(confnewPas==newPass)
                {
                 if( newPass.length<8)
                 {
                    alert("password and least 8 characters");
                    return false
                 }
                 else
                 {
                     return true;
                 }
                }
            else
            {
                alert("password and confirm password fields must match");
              return false;
            }
            
        }
        else
        {
            alert("please enter  a valid email format!!!!!");
            return false;
        }

    }
}


function CheckeValidatResubmitInfo()
{



    if(!ValidateForgetEmail())
    {

        alert("please verfiy the format of your submited information");
       


        var newPass=document.getElementById("NewPass").value;
        var confnewPas=document.getElementById("ConfPass").value;
        var Confemail=document.getElementById("logConf" ).value;

        Confemail.value="confirm Email";
        newPass.value="new password";
        confnewPas.value="confirm password";
        

    }
    else
    {
        alert("Congratulation your password has been resetted!");
    }

}