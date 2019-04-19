var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}


function flipcard(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

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



