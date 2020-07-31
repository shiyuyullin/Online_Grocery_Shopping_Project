     
     function validate() 
     {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var postal = document.getElementById("postal");
             
         
         if( name.value == "" )
          {
            alert( "Please provide your name!" );
            name.focus() ;
            return false;
         }


         if( email.value == "" ) 
         {
            alert( "Please provide your Email!" );
            email.focus() ;
            return false;
         }


         if( postal.value == "" || isNaN( postal.value ) || postal.length != 6 ) 
        {           
            alert( "Please provide a zip in the format ######." );
            document.myForm.Zip.focus() ;
            return false;
         }
        }

         function validateEmail() 
         {
         atposition = email.indexOf("@");
         dotposition = email.lastIndexOf(".");
         
         if (atposition < 1 || ( dotposition - atposition < 2 )) 
         {
            alert("Please enter correct email ID")
            email.focus() ;
            return false;
         }
        }
         
  