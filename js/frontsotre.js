function calcTotal(){
    var price = document.getElementById("price").innerHTML;
    var numOfProduct = document.getElementById("num").value;
    var subtotal = Math.round((parseFloat(price) * numOfProduct + Number.EPSILON) * 100) / 100
    if(!isNaN(subtotal))
    {
        var QST = Math.round((subtotal * 0.0975 + Number.EPSILON) * 100) / 100
        var GST = Math.round((subtotal * 0.05 + Number.EPSILON) * 100) / 100
        var total = Math.round((subtotal + QST + GST + Number.EPSILON) * 100) / 100
        document.getElementById("total1").innerHTML = total;
        document.getElementById("total2").innerHTML = total;
        document.getElementById("subtotal").innerHTML = subtotal;
        document.getElementById("QST").innerHTML = QST;
        document.getElementById("GST").innerHTML = GST;
    }
    

}