

cards = ["Ada", "Brendan", "Ali"]
birthday = "birthday"

function writeCards(cards, birthday) {
  thankYouCards = []
  for (let i = 0; i < cards.length; i++) {
    thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`)
  }
  return thankYouCards

}
