function getData () {
    const url = document.getElementById('url_string').value;
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return JSON.parse(request.responseText)
}


function inputData (pairs) {
    let index = 0;
    for(let key in pairs){
        const value = pairs[key];
        insertRow(key, value, index);
        index++;
    }
}


function insertRow(key, value, index){
    const table = document.getElementById("tbody");
    const row = table.insertRow(index);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;
}


function makeRequest () {
    const data = getData();
    inputData(data)
}


$(function(){
    $("#toggle").click(function() {
        $("#hidden").toggle();
    });

    $("#headerbutton").click(function() {
        $("#headeritalian").html("Hello, World!")
    });

    $("#httprequest").click(function() {
        makeRequest();
    })
});
