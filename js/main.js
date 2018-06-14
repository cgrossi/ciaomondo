function getData () {
    return {
        key1: "value1",
        key2: "value2"
    }
}


function inputData (data) {
    // make new row
    const table = document.getElementById("tbody");
    const row = table.insertRow(0);
    // make two columns
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    // insert keys and values into their columns
    cell1.innerHTML = "New cell";
    cell2.innerHTML = "New cell2";
}


function makeRequest () {
   const data = getData();
   inputData(data)
}
