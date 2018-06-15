export default function getData () {
    const url = document.getElementById('url_string').value;
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return JSON.parse(request.responseText)
}