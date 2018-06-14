function getData () {
    return {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4",
        key5: "value5",
        key6: "value6"
    }
}


function inputData (pairs) {
    // for each row in data
    for(let key in pairs){
        const value = pairs[key];
        insertRow(key, value);
    }
}


function insertRow(key, value){
    const table = document.getElementById("tbody");
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;
}


function makeRequest () {
   const data = getData();
   inputData(data)
}
