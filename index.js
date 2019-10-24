
function writeCards(cards, birthday) {
  let thankYouCards = []
  for (let i = 0; i < cards.length; i++) {
    thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`)
  }
  return thankYouCards

}
