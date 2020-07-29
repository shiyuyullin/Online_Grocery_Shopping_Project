function calcTotal()
  {
    var price = document.getElementById("price").innerHTML;
    var numOfProduct = document.getElementById("num").value;
    localStorage.setItem("num",numOfProduct);
    var subtotal = Math.round((parseFloat(price) * numOfProduct + Number.EPSILON) * 100) / 100
    if(!isNaN(subtotal))
    {
        var QST= Math.round((subtotal * 0.0975 + Number.EPSILON) * 100) / 100;
        var GST = Math.round((subtotal * 0.05 + Number.EPSILON) * 100) / 100;
        var total = Math.round((subtotal + QST + GST + Number.EPSILON) * 100) / 100;
        if(typeof(Storage) !== "undefined"){
            localStorage.setItem("subtotal", subtotal);
            localStorage.setItem("QST", QST);
            localStorage.setItem("GST", GST);
            localStorage.setItem("total", total);
            document.getElementById("subtotal").innerHTML = localStorage.getItem("subtotal");
            document.getElementById("QST").innerHTML = localStorage.QST;
            document.getElementById("GST").innerHTML = localStorage.getItem("GST");
            document.getElementById("total1").innerHTML = localStorage.getItem("total");
            document.getElementById("total2").innerHTML = localStorage.getItem("total");
        }
        else{
            document.write("Your web browser does not support Web Storage.")
        }
        
    }
}

  window.onload = function()
  {
      var total = localStorage.getItem("total");
      if(total != null){
        document.getElementById("total1").innerHTML = localStorage.getItem("total");
        document.getElementById("total2").innerHTML = localStorage.getItem("total");
      }
      var subtotal = localStorage.getItem("subtotal");
      if(subtotal != null){
        document.getElementById("subtotal").innerHTML = localStorage.getItem("subtotal");
      }
      if(QST != null){
        document.getElementById("QST").innerHTML = localStorage.getItem("QST");
      }
      if(GST != null){
        document.getElementById("GST").innerHTML = localStorage.getItem("GST");
      }
      if(num != null){
        document.getElementById("num").value = localStorage.getItem("num");
      }
  } 