
var modalparent = document.getElementsByClassName("modal_multi");

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

var span_close_multi = document.getElementsByClassName("close_multi");

var priceElements = document.getElementsByClassName("price");
var prices = Array();
var productElements = document.getElementsByClassName("productName");
var productNames = Array();

function setDataIndex() {

  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute('data-index', i);
    modalparent[i].setAttribute('data-index', i);
    span_close_multi[i].setAttribute('data-index', i);
    prices[i] = Number(priceElements[i].innerHTML.match(/\d+\.\d{0,2}/));
    productNames[i] = productElements[i].innerHTML;
  }
}
for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modalparent[ElementIndex].style.display = "block";
  };
  span_close_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modalparent[ElementIndex].style.display = "none";
  };

}

window.onload = function () {

  setDataIndex();
};

window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute('data-index')]) {
    modalparent[event.target.getAttribute('data-index')].style.display = "none";
    //alert(productNames[event.target.getAttribute('data-index')]);
    // alert(prices[event.target.getAttribute('data-index')]);

    if (!localStorage.products) {
      var array = [productNames[event.target.getAttribute('data-index')]];
      window.localStorage.setItem("products", JSON.stringify(array));

    }
    else {
      var array = JSON.parse(localStorage.getItem("products"));//no brackets
      array[array.length] = productNames[event.target.getAttribute('data-index')];
      window.localStorage.setItem("products", JSON.stringify(array));
    }
    if (!localStorage.prices) {
      var array = [prices[event.target.getAttribute('data-index')]];
      window.localStorage.setItem("prices", JSON.stringify(array));

    }
    else {
      var array = JSON.parse(localStorage.getItem("prices"));//no brackets
      array[array.length] = prices[event.target.getAttribute('data-index')];
      window.localStorage.setItem("prices", JSON.stringify(array));
    }
    //var productsArray = JSON.parse(localStorage.getItem("products"));//no brackets
    //var pricesArray = JSON.parse(localStorage.getItem("prices"));//no brackets
    //alert(productsArray);
    //alert(pricesArray);
  }



}
