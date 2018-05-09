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
}

];

var cardsInPlay = [];

//This function checks for a match.
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
   }
   cardsInPlay = [];
};

//This function stores the steps when the user flips a card.
var flipCard = function (cardId) {
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	} 
};

flipCard(0);
console.log(cards[0].cardImage);
console.log(cards[0].suit);
flipCard(2);
console.log(cards[2].cardImage);
console.log(cards[2].suit);










