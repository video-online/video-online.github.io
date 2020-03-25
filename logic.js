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

function openWin(movieURL, posterURL = "https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg") {
    var myWindow = window.open("MOVIE");
    myWindow.document.write(`<title>AK Movie</title><video src="${movieURL}" style="width:100%;height:100%" poster="${posterURL}" controls=""></video>`);
}

function movieExtractor(response) {
    var movies = JSON.parse(response);
    console.log(movies);
    for (var i = movies.length; i >= 0 ; i--) {
        console.log(movies[i]);
        var movieCard =
            `<!-- Movie Card --><div class='card persian' onclick='openWin("${movies[i].URL}")'><img src = ${movies[i].cover} class='movie-cover' ><div class='overlay'><div class='text'><h3>خلاصه داستان</h3><hr><h4>${movies[i].brief}</h4><hr><button class='card-button trailer-button'>تریلر<i class='fas fa-film button-icon-with-text'></i></button><button class='card-button favorite-button'><i class='far fa-heart button-icon-without-text'></i></button></div></div><div class='container center-text'><h4><b>${movies[i].name}</b></h4><h4>دوبله - ${movies[i].rate} - ${movies[i].year}</h4><h4>${movies[i].genre}</h4></div></div>`;
        $(".main").append(movieCard);
    }
}



loadJSON(movieExtractor);