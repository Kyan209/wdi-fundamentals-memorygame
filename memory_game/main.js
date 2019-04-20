var cards = [
{
rank: "queen",
suit: "heart",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamond",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "heart",
cardImage:"images/king-of-hearts.png"

},
{
rank: "king",
suit: "diamond",
cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}


function flipcard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

}
flipcard(0);
flipcard(2);
checkForMatch();



// Now, call the checkForMatch function from inside the flipCard function, 
// where the lines above used to sit inside the if statement.
// Save your main.js file, open the project in Chrome and open the console. 
// Make sure that the "User flipped queen" and "User flipped king" messages are still displayed.
// NOTE: We want to make sure that the checkForMatch function comes before the 
// flipCard function, so that when we call the checkForMatch function from within the 
// flipCard function we will not get an error.

// Woohoo! Nice work! Now we've added some organization to our code and created a 
// reusable function that can be called each time the user flips over a card.



