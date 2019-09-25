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

    let card1=GenerateCard();
    checkDuplicates(card1, dealerHand);

    let card2 = GenerateCard();
    checkDuplicates(card2, playerHand);

    let card3 = GenerateCard();
    checkDuplicates(card3, playerHand);

    let img = document.createElement("img");
    let img1 = document.createElement("img");
    img.src= "./images/" + card.number + "_of_" + card.suit + ".png";
    img1.src="./images/" + card1.number + "_of_" + card1.suit + ".png";
    document.getElementById("dealer-hand").appendChild(img);
    document.getElementById("dealer-hand").appendChild(img1);

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

//player pushes stand button;

var stand = () => {
    //deal generate cards to dealer and place their image also
    while (mySum(dealerHand) < 17){
    let card = GenerateCard();
    checkDuplicates(card, dealerHand);
    let img = document.createElement("img");
    img.src = "./images/" + card.number + "_of_" + card.suit + ".png";
    document.getElementById("dealer-hand").appendChild(img);
    document.getElementById("dealer-points").innerHTML = displayTotal(dealerHand);}
    
    if (mySum(dealerHand) == 21){
    document.getElementById("messages").innerHTMl = "Dealer Wins!!!!"
    }
    else if (mySum(dealerHand) > 21){
    document.getElementById("messages").innerHTML = "Dealer Busted!!!!"
    }
    else if(mySum(dealerHand) < 21 && mySum(playerHand) < mySum(dealerHand)){
    document.getElementById("messages").innerHTML = "Dealer Wins!!!!"
    }
    else if(mySum(dealerHand) < 21 && mySum(playerHand) > mySum(dealerHand)){
    document.getElementById("messages").innerHTML = "Player Wins!!!!"
    }
    else {
    document.getElementById("messages").innerHTML = "Dealer Wins!!!"
    }
}
document.getElementById("stand-button").addEventListener("click", stand);
