var movieUrl =  "http://www.omdbapi.com/?s=Batman&apikey=9facd5ec";
let request = new XMLHttpRequest();
request.open("GET", movieUrl);
request.send();

request.onload = () => {
    let movieResponse = JSON.parse(request.responseText);
    let searchResults = movieResponse.Search
    console.log(searchResults)
    let img = searchResults.forEach(createImg)
    function createImg(movie){
        console.log(movie.Title)
        console.log(movie.Poster)
        let title = document.createElement("h3");
        title.innerHTML = movie.Title;
        let year = document.createElement("h4");
        year.innerHTML = movie.Year;
        
        document.body.appendChild(title);
        document.body.appendChild(year);
        let img = document.createElement("img");
        img.src = movie.Poster;
        document.body.appendChild(img);
    }
}
//     // console.log(movieResponse);
//     //console.log(movieResponse.Search.Title)
//     // arrayList(movieResponse);
//     // console.log(arrayList(movieResponse));

// }

// function arrayList(movieList){
//     for(let i = 0; i < movieList.Search.length; i++) {
//         let list = movieList.Search[i].Title;
//         let poster = movieList.Search[i].Poster;
//         // console.log(list);
//         // console.log(poster);
//     };
    
//     //movieList.map(element => element.Search[i].Title);
//     //movieList.map(element => element.Year);
// };

// var img = document.createElement("img");
// // img.src = 

