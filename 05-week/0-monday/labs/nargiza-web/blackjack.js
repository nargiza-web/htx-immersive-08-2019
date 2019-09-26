var dealerHand = [];
var playerHand = [];

var mySuits = () => {
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    let i = Math.floor(Math.random()* 4) ;
    return suits[i];}

//maximum and minimum from formula Math.floor(Math.random() * (max-min + 1)) + min
var display = () =>{
        let random = Math.floor(Math.random()* 13)+1;
        "use strict";
       if ( random === 1){
           return "ace";
       }
       else if (random === 11){
           return "jack";
       }
       else if (random === 12){
           return "queen";
       }
       else if (random === 13){
           return "king";}
    
       return random ;
    } 

/////////////// generates card
function GenerateCard(){
    let card ={
        suit: mySuits(),
        number: display(),      
    }
    return card;
}

// checking duplicates
function checkDuplicates(card, player){
    while(playerHand.includes(card) || dealerHand.includes(card)){
        card = GenerateCard(); 
        }
        return player.push(card);
        }
    
///calculating points in general
function mySum(someHand){
    "use strict";
    let array = someHand.map( value => value.number)
      let numbersOnly = array.map(value => {
          switch (value){
              case "jack": case "queen": case "king": return 10;
              default: return value;
          }
      })
      let sumOfArray = numbersOnly.reduce((sumSoFar, nextValue) => {
          if (typeof nextValue === "number"){
              return sumSoFar + nextValue;
          }
          else if (typeof nextValue === "string" && sumSoFar < 11){
              return sumSoFar + 11;
          }
          else if (typeof nextValue === "string" && sumSoFar >=11){ 
              return sumSoFar +1;
          }
      })
      return sumOfArray;
    }

// BUSTS OR WINS!
function displayTotal(someHand){
    let total = mySum(someHand);
    if (total > 21){
        return total + " YOU BUSTED!";
    }
    else if (total < 21){
        return total;}
    
    else if (total = 21){
        return total + " YOU WIN!";
    }
    }

var deal = () => {            
    let card = GenerateCard();
    checkDuplicates(card,dealerHand);

    //let card1=GenerateCard();
    //checkDuplicates(card1, dealerHand);

    let card2 = GenerateCard();
    checkDuplicates(card2, playerHand);

    let card3 = GenerateCard();
    checkDuplicates(card3, playerHand);

    let img = document.createElement("img");
    let img1 = document.createElement("img");
    img1.setAttribute("id", "replace");
    img.src= "./images/" + card.number + "_of_" + card.suit + ".png";
    //img1.src="./images/" + card1.number + "_of_" + card1.suit + ".png";
    img1.src = "https://i.pinimg.com/originals/79/21/66/792166a01d9f4024b4eb51ae51b0b185.jpg";
    document.getElementById("dealer-hand").appendChild(img1);
    document.getElementById("dealer-hand").appendChild(img);
    
    let imgPlayer = document.createElement("img");
    let imgPlayer1 = document.createElement("img");
    imgPlayer.src = "./images/" + card2.number + "_of_" + card2.suit + ".png";
    imgPlayer1.src="./images/" + card3.number + "_of_" + card3.suit + ".png";
    document.getElementById("player-hand").appendChild(imgPlayer);
    document.getElementById("player-hand").appendChild(imgPlayer1);
    //console.log(mySum(dealerHand));
    document.getElementById("dealer-points").innerHTML = displayTotal(dealerHand);
    document.getElementById("player-points").innerHTML = displayTotal(playerHand);
}
document.getElementById("deal-button").addEventListener("click", deal);

var hit = () => {
    let card = GenerateCard();
    checkDuplicates(card,playerHand);
    let img = document.createElement("img");
    img.src = "./images/" + card.number + "_of_" + card.suit + ".png";
    document.getElementById("player-hand").appendChild(img);
    //console.log(mySum(playerHand));
    // console.log(displayTotal(playerHand));
    document.getElementById("player-points").innerHTML = displayTotal(playerHand);  
}
document.getElementById("hit-button").addEventListener("click", hit);

//player pushes stand button; //first replace the image
var replace = () => {
   let card = GenerateCard();
   checkDuplicates(card, dealerHand);
   //I have created and id on my image1 for flip, now using it
   let img1 = document.querySelector("#replace");
   var newImg1 = document.createElement('img');
   newImg1.src = "./images/" + card.number + "_of_" + card.suit + ".png";
   img1.parentNode.replaceChild(newImg1, img1);
   document.getElementById("dealer-points").innerHTML = displayTotal(dealerHand);
}

var stand = () => {
    //deal generate cards to dealer and place their image also
    replace();
    while (mySum(dealerHand) <= 17){
    let card = GenerateCard();
    checkDuplicates(card, dealerHand);
    let img = document.createElement("img");
    img.src = "./images/" + card.number + "_of_" + card.suit + ".png";
    document.getElementById("dealer-hand").appendChild(img);
    document.getElementById("dealer-points").innerHTML = displayTotal(dealerHand);}
    
    if (mySum(dealerHand) == 21){
    document.getElementById("messages").innerHTMl = mySum(dealerHand) + " Dealer Wins!!!!"
    }
    else if (mySum(dealerHand) > 21){
    document.getElementById("messages").innerHTML = mySum(playerHand) + " Player Wins!!!!"
    }
    else if(mySum(dealerHand) < 21 && mySum(playerHand) < mySum(dealerHand)){
    document.getElementById("messages").innerHTML = mySum(dealerHand) + " Dealer Wins!!!!"
    }
    else if(mySum(dealerHand) < 21 && mySum(playerHand) > mySum(dealerHand)){
    document.getElementById("messages").innerHTML = mySum(playerHand) + " Player Wins!!!!"
    }
    else {
    document.getElementById("messages").innerHTML = mySum(dealerHand) + " Dealer Wins!!!"
    }
}
document.getElementById("stand-button").addEventListener("click", stand);

var restart = () => {
document.getElementById("messages").reset();
document.getElementById("dealer-points").reset();
document.getElementById("hit-button").reset();
document.getElementById("player-points").reset();
document.getElementById("dealer-hand").reset();
document.getElementById("player-hand").reset();
document.getElementById("deal-button").reset();
document.getElementById("stand-button").reset();
}
document.getElementById("restart-button").addEventListener("click", restart);