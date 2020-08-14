function deleteRow(tableID,currentRow) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            /*var chkbox = row.cells[0].childNodes[0];*/
            /*if (null != chkbox && true == chkbox.checked)*/

            if (row==currentRow.parentNode.parentNode) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    } 
    catch (e) {
        alert(e);
    }
    //getValues();
}

function validateForm() {
    var x = document.forms["addForm"]["Customer"].value;
    if (x == "") {
      alert("Customer name must be filled out!");
      return false;
    }
    if(x.match(/[0-9]/)){
        alert("Customer name cannot contain any numbers!")
        return false;
    }
    x = document.forms["addForm"]["orderNumber"].value;
    if (x == "") {
      alert("Order number must be filled out!");
      return false;
    }
    if (!x.match(/\d\d\d-\d\d\d\d\d/)) {
      alert("Please check! Format of the order number is incorrect!");
      return false;
    }
    x = document.forms["addForm"]["Total"].value;
    if (x == "") {
      alert("Total amount of money must be given!");
      return false;
    }
    if (!x.match(/[0-9]/)) {
      alert("Total amount of money has to be a number!");
      return false;
    }
  }


