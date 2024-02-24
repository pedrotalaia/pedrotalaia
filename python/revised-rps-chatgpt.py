import random

def play_game():
    rock = "Rock ASCII Art"
    paper = "Paper ASCII Art"
    scissors = "Scissors ASCII Art"
    art = [rock, paper, scissors]
    types = ['rock', 'paper', 'scissors']

    computerPickIndex = random.randint(0, 2)
    computerPick = types[computerPickIndex]
    userPick = input("Choose: 'rock', 'paper', 'scissors': ").lower()

    if userPick not in types:
        print("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
        return

    userPickIndex = types.index(userPick)

    print(f"You chose {userPick}, computer chose {computerPick}.\n")

    if userPickIndex == computerPickIndex:
        print(art[computerPickIndex])
        print("It's a draw.")
    elif (userPickIndex - computerPickIndex) % 3 == 1:
        print(art[computerPickIndex])
        print("You won!")
    else:
        print(art[computerPickIndex])
        print("You lost.")

def main():
    while True:
        play_game()
        restart = input("\nDo you want to play again? [y/n]: ")
        if restart.lower() != 'y':
            print("\nThanks for playing! Goodbye.")
            break

if __name__ == "__main__":
    main()
