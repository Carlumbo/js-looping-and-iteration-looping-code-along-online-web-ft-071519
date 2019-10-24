
function writeCards(cards, event) {
  let thankYouCards = []
  for (let i = 0; i < cards.length; i++) {
    thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards

}




function counDown (count) {
  while(count > 0 ) {
    console.log(count);
    count -= 1;
  }
  console.log(count);
}
