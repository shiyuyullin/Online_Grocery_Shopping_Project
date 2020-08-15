     function validate() {
     	var name = document.getElementById("name");
     	var email = document.getElementById("email");
     	var address = document.getElementById("address");
     	var city = document.getElementById("city");
     	var postal = document.getElementById("postal");
     	var id = document.getElementById("id");
     	if (name.value == "") {
     		alert("Please provide your name!");
     		name.focus();
     		return false;
     	}
     	if (email.value == "") {
     		alert("Please provide your Email!");
     		email.focus();
     		return false;
     	}
     	if (postal.value == "" || postal.value.length != 6) {
     		alert("Please provide a postal code in the format ######.");
     		postal.focus();
     		return false;
     	}
     	if (address.value == "") {
     		alert("Please provide your Address!");
     		address.focus();
     		return false;
     	}
     	if (city.value == "") {
     		alert("Please provide your city!");
     		city.focus();
     		return false;
     	}
     	if (id.value == "") {
     		alert("Please provide your ID!");
     		id.focus();
     		return false;
     	}
          return true;
     }

     function validateEmail() {
     	var emailID = email.value;
     	atposition = emailID.indexOf("@");
     	dotposition = emailID.lastIndexOf(".");
     	if (atposition < 1 || (dotposition - atposition < 2)) {
     		alert("Please enter correct email ID")
     		email.focus();
     		return false;
     	}
          return true;
     }
     
     function submitForm()
     {
          if(validate() && validateEmail())
               document.forms[0].submit();
     }