/*
Small Exercises

Stopwatch
Create a simple stopwatch app that starts the timer and shows the stopped time.

Start the stopwatch with a promise
End the stopwatch on a random time between 1-10 seconds
When the stopwatch stops, display the time it took
*/
// 1-create a circle on body
//inside the circle put a block
//display the randomized time
function myTimer (){

var randomTime = Math.floor(Math.random() * 10000) + 1000;

var startWatch = new Promise(function (resolve, reject){
    setTimeout(function() {
        resolve("seconds");
    },randomTime);
});

var something = startWatch.then(function(value){
    let seconds = Math.floor(randomTime / 1000);
    console.log("It has been " + seconds +" "+ value);
    document.getElementById("timer1").innerHTML = "It has been " + seconds +" "+ value;
})

 return something;
}

myTimer()


/////////////////////
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
  // expected output: [object Promise]
