window.addEventListener('load', () => document.querySelector('.preloader')
.classList.add('hidePreloader'))

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
    formData["make"] = document.getElementById("make").value;
    formData["model"] = document.getElementById("model").value;
    formData["color"] = document.getElementById("color").value;
    formData["year"] = document.getElementById("year").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("carList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.make;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.color;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)"><button class="btn btn-warning">Edit</button></a>
                       <a onClick="onDelete(this)"><button class="btn btn-danger">Delete</button></a>`;
}

function resetForm() {
    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("color").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("make").value = selectedRow.cells[0].innerHTML;
    document.getElementById("model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("color").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.make;
    selectedRow.cells[1].innerHTML = formData.model;
    selectedRow.cells[2].innerHTML = formData.color;
    selectedRow.cells[3].innerHTML = formData.year;
    selectedRow.cells[4].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("carList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("make").value == "") {
        isValid = false;
        document.getElementById("makeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("makeValidationError").classList.contains("hide"))
            document.getElementById("makeValidationError").classList.add("hide");
    }
    return isValid;
}