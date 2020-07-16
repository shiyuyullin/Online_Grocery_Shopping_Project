




function redirect(address)
{
  
  location.replace(address);
  
}

var selectEl = document.getElementById('AllAiles');

selectEl.onchange = function(){
  var address = this.value;
  redirect(address);

};


function reditem1()
{
  location.replace('Ditem1P3.html');
}



function reditem2()
{
  location.replace('Ditem2P3.html');
}



function reditem3()
{
  location.replace('Ditem3P3.html');
}



function reditem4()
{
  location.replace('Ditem4P3.html');
}



function reditem5()
{
  location.replace('Ditem5P3.html');
}



function reditem6()
{
  location.replace('Ditem6P3.html');
}



function reditem7()
{
  location.replace('Ditem7P3.html');
}

function reditem8()
{
  location.replace('Ditem8P3.html');
}



function reditem9()
{
  location.replace('Ditem9P3.html');
}



function reditem10()
{
  location.replace('Ditem10P3.html');
}



function reditem11()
{
  location.replace('Ditem11P3.html');
}



function reditem12()
{
  location.replace('Ditem12P3.html');
}
























function redirctLoginBox()

{


    var getElment=document.getElementById('LogInBox');



    location.replace('signIn.html');

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
    var x5=document.getElementById("OldPass" ).disabled = false;
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
    var x5=document.getElementById("OldPass" ).disabled = true;
    var x6=document.getElementById("NewPass" ).disabled = true;
    var x7=document.getElementById("ConfPass" ).disabled = true;
    var x8=document.getElementById("subBtn" ).disabled = true;

  }




}

function AilseClRedirect()
{

    

location.replace("ClProducts.html");
}




var slideIndex = 0;


function nextSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("circle");
  // go to next one 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  // change ciricl background
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" circleChColor", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " circleChColor";
  setTimeout(nextSlide, 2500);
}
nextSlide();

aisleRedirect();