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
    console.log(movies);
    for (var i = 0; i < movies.length; i++) {
        console.log(movies[i]);
        var movieCard =
            "<!-- Movie Card --> <script>function togoMovie() {var myWindow = window.open('MOVIE');myWindow.document.write('<title>AK Movie</title><video src='http://s7.dlrozane.net/dlroozane/98/10/Togo.2019.1080p.Farsi.Dubbed.mkv' style='width:100%;height:100%' poster='https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg' controls=''></video>');}</script><div class='card persian' onclick='togoMovie()'><img src = 'https://dlroozane.net/wp-content/uploads/2020/01/Togo.jpg' class='movie-cover' ><div class='overlay'><div class='text'><h3>خلاصه داستان</h3><hr><h4>این فیلم داستان یک سگ سورتمه‌ای به نام توگو را به تصویر می‌کشد که هدایت یک گروه از سگ‌هارا در دهه‌ی بیست میلادی بر عهده دارد ، اما اکثر افراد هدایت چنین سگ کوچک و ضعیفی راباورنکردنی می‌دانند و…</h4><hr><button class='card-button trailer-button'>تریلر<i class='fas fa-film button-icon-with-text'></i></button><button class='card-button favorite-button'><i class='far fa-heart button-icon-without-text'></i></button></div></div><div class='container center-text'><h4><b>توگو</b></h4><h4>دوبله - 8.2 - 1080p</h4><h4>ماجراجویی | درام</h4></div></div>";
        $(".main").append(movieCard);
    }
}

function openWin(movieURL, posterURL = "https://inspirecast.ca/wp-content/uploads/2016/01/Robert-Kiyosaki-The-only-difference-between-a-rich-person-and-poor-person-is-how-they-use-their-time.jpg") {
    var myWindow = window.open("MOVIE");
    myWindow.document.write(`<title>AK Movie</title><video src="${movieURL}" style="width:100%;height:100%" poster="${posterURL}" controls=""></video>`);
}


loadJSON(movieExtractor);