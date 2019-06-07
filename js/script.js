$(document).ready(function() {
    //adds HTML Structure 
    $('.structure-add').after('<div class="row "><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "> </p></div></div></div></div></div><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "></p></div></div></div></div></div></div>' + '<div class="row "><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "> </p></div></div></div></div></div><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "></p></div></div></div></div></div></div>' + '<div class="row "><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "> </p></div></div></div></div></div><div class="col-xl-6 mt-1 col-l-6 col-m-12 mt-3 mb-5 "><div class="card background-dark shadow"><div class="card-horizontal"><div class="img-square-wrapper"><img class="resizer m-1" src="" alt="Card image cap"></div><div class="card-body"><h4 class="card-title text-light font-weight-light text-center "></h4><br><p class="card-text text-light font-weight-light text-left text-break"></p><div class="row d-flex justify-content-end align-items-end mt-4"><button class="btn btn-success m-1 " >Like</button><p class="like-counter  rounded-circle bg-success text-center m-1 "></p></div></div></div></div></div></div>')
    //injects Information into the HTML structure through Json
    for (let i = 0; i < movies.length; i++) {
        $($(".resizer")[i]).attr('src', movies[i].image);
        $($(".card-title")[i]).html(movies[i].name);
        $($(".card-text")[i]).html(movies[i].description);
        $($(".like-counter")[i]).html(movies[i].like);
        //adds Like button Functionality
        $($(".btn-success")[i]).on('click', function() {
        	movies[i].like = movies[i].like +1
            $($(".like-counter")[i]).html(movies[i].like);
        });

    };
    //Sorts by Descending Likes 
    $($(".sort-btn")).on('click', function() {
        movies.sort(function(a, b) {
            return parseFloat(b.like) - parseFloat(a.like);
        });
        //Updates Page
        for (let k = 0; k < movies.length; k++) {
            $($(".resizer")[k]).attr('src', movies[k].image);
            $($(".card-title")[k]).html(movies[k].name);
            $($(".card-text")[k]).html(movies[k].description);
            $($(".like-counter")[k]).html(movies[k].like);
        };




    });
});