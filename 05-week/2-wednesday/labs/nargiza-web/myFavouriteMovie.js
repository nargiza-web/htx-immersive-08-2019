//https://www.imdb.com/title/tt0375611/?ref_=nm_knf_i3
//initialize the HTTP request.
var host = new XMLHttpRequest();
host.open("GET", "http://www.omdbapi.com/?i=tt0375611&apikey=9facd5ec");

//Track the state change of the request.
host.onreadystatechange = function(){
    var DONE=4; //readyState 4 means the request is done.
    var OK = 200;//status 200 is a successful return.
    if (host.readyState === DONE) {
        if (host.status === OK ){
            console.log(host.responseText);//'This is the output.'
            console.log(JSON.parse(host.responseText));
        } else {
            console.log("Error: " + host.status);//if an error occurs during the request
        }
    }
}
host.send(null);

// AJAX
$.ajax({
    type:"GET",
    url: "http://www.omdbapi.com/?i=tt0375611&apikey=9facd5ec",
    dataType: "JSON", //data type expected from server
    success: function (response){
        console.log(response);
        
    }
})
