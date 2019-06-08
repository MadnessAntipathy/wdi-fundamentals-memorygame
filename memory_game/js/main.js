var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
},
];

//array to hold cards in play
var cardsInPlay = [];

//check for match of two selected cards
function checkForMatch (){
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0]===cardsInPlay[1]){
      alert("You found a match!");
      console.log("You found a match!");
    }
    else {
      alert("Oops, try again!");
      console.log("Oops, try again!");
    }
  }
}

//when user flips card
function flipCard (cardId){
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank)
  console.log (cards[cardId].cardImage);
  console.log (cards[cardId].suit);
  checkForMatch();
}
flipCard (0);
flipCard (2);
