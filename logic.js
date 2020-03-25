var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// $.getJSON( "movies-information.json", function( data ) {
//     console.log(data);
//   });

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '127.0.0.1//movies-information.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
    });
}

loadJSON(init)

function openWin(movieURL, posterURL = "https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg") {
    var myWindow = window.open("MOVIE");
    myWindow.document.write(`<title>AK Movie</title><video src="${movieURL}" style="width:100%;height:100%" poster="${posterURL}" controls=""></video>`);
}