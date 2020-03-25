var movies;

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'movies-information.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        movies = JSON.parse(response);
    });
}
loadJSON(init)
console.log(movies);

function openWin(movieURL, posterURL = "https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg") {
    var myWindow = window.open("MOVIE");
    myWindow.document.write(`<title>AK Movie</title><video src="${movieURL}" style="width:100%;height:100%" poster="${posterURL}" controls=""></video>`);
}