function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://akdatabase-76b9.restdb.io/rest/akmoviepro', false);
    xobj.setRequestHeader('x-apikey', '5eca70d94a532801892ed6fc')
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function movieExtractor(response) {
    var movies = JSON.parse(response);
    $(".movies").empty();
    for (var i = 0; i < movies.length; i++) {
        var movieCard =
            `<script>function openTrailer_${movies[i]._id}(){myWindow=window.open();myWindow.document.write('<title>${movies[i].name}</title><video src="${movies[i].trailerUrl}" style="width:100%;height:100%" poster="https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg" controls=""></video>')};</script><script>function openMovie_${movies[i]._id}(){myWindow=window.open();myWindow.document.write('<title>${movies[i].name}</title><video src="${movies[i].movieUrl}" style="width:100%;height:100%" poster="https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg" controls=""></video>')};</script><div class='card persian'><img src = ${movies[i].cover} class='movie-cover'><div class='overlay'><div class='text'><h3>خلاصه داستان</h3><hr><h4>${movies[i].brief}</h4><hr><button class='card-button trailer-button' onclick='openTrailer_${movies[i]._id}()'>تریلر<i class='fas fa-film button-icon-with-text'></i></button><button onclick='openMovie_${movies[i]._id}()' class='card-button play-button'><i class='far fa-play-circle button-icon-without-text'></i></button><button class='card-button favorite-button'><i class='far fa-heart button-icon-without-text'></i></button></div></div><div class='container center-text'><h4 class="movie-name"><b>${movies[i].name}</b></h4><h4>${movies[i].language} - ${movies[i].score} 🎬 - ${movies[i].country} ${movies[i].year}</h4><h5>${movies[i].genere}</h5></div></div>`
        $(".movies").append(movieCard);
    }

    $(document).ready(function () {
        $('body').persianNum();
    })
}




$(window).bind("load", function () {
    loadJSON(movieExtractor);
});