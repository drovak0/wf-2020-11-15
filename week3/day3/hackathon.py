import random

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

def custom_sort_func(card):
    print('card.rank: ', card.rank)
    return card.rank

class Deck:
    def __init__(self):
        self.cards = []

        # Populate the cards list -- loop to 52
        for name in ["Hearts", "Clubs", "Diamonds", "Spades"]:
            for rank in range(1, 14):
                self.cards.append(Card(name, rank))

    def shuffle(self):
        random.shuffle(self.cards)

    def sort(self):
        print('SORTING !!!!!!!!!!!!!!!!!!!!!!')
        # sorted(self.cards, key=custom_sort_func)
        self.cards = sorted(self.cards, key=custom_sort_func)

        # ***************
        # sort by suit
        self.cards = sorted(self.cards, key=lambda card: card.suit)


    def baloot(self):
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


print('*'*50)
print('Before we shuffle.')

for card in my_deck.cards:
    card.show_card()


my_deck.shuffle()

print('*'*50)
print('After we shuffle')
for card in my_deck.cards:
    card.show_card()

# make user
class Player():
    def __init__(self, name):
        self.name = name
        self.hand = []


aishah = Player('Aishah')
mohammed = Player('Mohammed')
print('*'*50)
print('Aisha is stealing the cards, while no one is looking.')
my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
my_deck.draw_card(aishah)
# print(aishah.hand)

print('*'*50)
print('We are attempting to sort 🤞')
# reset
my_deck.sort()


print('*'*50)
print('Showing sorted cards ... hopefully.')

for card in my_deck.cards:
    card.show_card()

# my_deck.play_a_game()
