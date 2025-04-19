var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["nev"] = document.getElementById("nev").value;
    formData["email"] = document.getElementById("email").value;
    formData["kor"] = document.getElementById("kor").value;
    formData["varos"] = document.getElementById("varos").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nev;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.kor;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.varos;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Változtatás</a>
                       <a onClick="onDelete(this)">Törlés</a>`;
}

function AlapAdat() {
	
	var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Kis József";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "KisJozsef@email.hu";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "34";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Cegléd";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Változtatás</a>
                       <a onClick="onDelete(this)">Törlés</a>`;
    var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Hegedüs Ferenc";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "HegeFere@email.hu";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "20";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Ceglédbercel";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Változtatás</a>
                       <a onClick="onDelete(this)">Törlés</a>`;
							   
	var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Rácz András";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "RAndras@email.hu";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "45";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Budapest";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Változtatás</a>
                       <a onClick="onDelete(this)">Törlés</a>`;

	var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Nagy Ilona";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = "nilona@email.hu";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = "50";
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Debrecen";
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Változtatás</a>
                       <a onClick="onDelete(this)">Törlés</a>`;



}

function resetForm() {
    document.getElementById("nev").value = "";
    document.getElementById("email").value = "";
    document.getElementById("kor").value = "";
    document.getElementById("varos").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nev").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("kor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("varos").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nev;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.kor;
    selectedRow.cells[3].innerHTML = formData.varos;
}
function onDelete(td) {
    if (confirm('Törölni szeretné a rekordot?')) {
        row = td.parentElement.parentElement;
        document.getElementById("lista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nev").value == "") {
        isValid = false;
        document.getElementById("nevValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nevValidationError").classList.contains("hide"))
            document.getElementById("nevValidationError").classList.add("hide");
    }
    return isValid;
}

		function Kereses(j) {
			var input, filter, table, tr, td, i, j, txtValue;
			if (j == 1) {
				input = document.getElementById("EmailKeres");
		} else if (j == 2) {
				input = document.getElementById("KorKeres");
		} else if ( j== 3) {
				input = document.getElementById("VarosKeres");
		} else input = document.getElementById("Keres");
		
			filter = input.value.toUpperCase();
			table = document.getElementById("lista");
			tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("td")[j];
				if (td) {
					txtValue = td.textContent || td.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) 
						tr[i].style.display = "";
					else 
						tr[i].style.display = "none";					
				}       
			}
		}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 4;
  table = document.getElementById("lista");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}