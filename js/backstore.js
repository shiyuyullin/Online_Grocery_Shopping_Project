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

function insertARow(tableID) {
    var table = document.getElementById(tableID);
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }