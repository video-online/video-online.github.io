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

function movieExtractor(response) {
    var movies = JSON.parse(response);
    for (var i = movies.length - 1; i >= 0; i--) {
        var movieCard =
            `<script>function openMovie_${movies[i].id}(){myWindow=window.open();myWindow.document.write('<title>AK Movie</title><video src="${movies[i].URL}" style="width:100%;height:100%" poster="https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg" controls=""></video>')};</script><div class='card persian' onclick='openMovie_${movies[i].id}()'><img src = ${movies[i].cover} class='movie-cover'><div class='overlay'><div class='text'><h3>خلاصه داستان</h3><hr><h4>${movies[i].brief}</h4><hr><button class='card-button trailer-button' onclick="$('.ui.modal.${movies[i].id}').modal('show');">تریلر<i class='fas fa-film button-icon-with-text'></i></button><button class='card-button play-button'><i class='far fa-play-circle button-icon-without-text'></i></button><button class='card-button favorite-button'><i class='far fa-heart button-icon-without-text'></i></button></div></div><div class='container center-text'><h4 class="movie-name"><b>${movies[i].name}</b></h4><h4>دوبله - ${movies[i].rate} - ${movies[i].year}</h4><h5>${movies[i].genre}</h5></div></div>`
        $(".movies").append(movieCard);
    }

    $(document).ready(function () {
        $('body').persianNum();
    })
}




$(window).bind("load", function () {
    loadJSON(movieExtractor);
});