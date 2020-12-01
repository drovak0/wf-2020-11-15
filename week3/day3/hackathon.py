# Deck of cards
# 52 cards in a deck
# suits hearts, spades, diamonds, clubs
# [x] build card
# [x] build deck
# [x] implement method to show the card
# [ ] implement shuffle
# [ ] implement a sort
# [ ] implement a game

class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
        self.name = ""

        names = {
            1: "Ace",
            11: "Jack",
            12: "Queen",
            13: "King"
        }

        if rank in names:
            self.name = names[rank]
        else:
            self.name = str(rank)

    def show_card(self):
        print(f"{self.name} of {self.suit}")


class Deck:
    def __init__(self):
        self.cards = []

        # Populate the cards list -- loop to 52
        for name in ["Hearts", "Clubs", "Diamonds", "Spades"]:
            for rank in range(1, 14):
                self.cards.append(Card(name, rank))

    def shuffle(self):
        pass

    def sort(self):
        pass

    def play_a_game(self):
        pass

    def draw_card(self, player):
        card = self.cards.pop()
        print(f'Passing {card.name} {card.suit} to {player.name}')
        player.hand.append(card)


# card1 = Card("Hearts", 1)
# card2 = Card("Spades", 5)
# card3 = Card("Diamonds", 13)

# card1.show_card()
# card2.show_card()
# card3.show_card()


my_deck = Deck()
# for card in my_deck.cards:
#     card.show_card()

my_deck.shuffle()

# make user
class Player():
    def __init__(self, name):
        self.name = name
        self.hand = []


aishah = Player('Aishah')
mohammed = Player('Mohammed')

my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
print(aishah.hand)


my_deck.play_a_game()
