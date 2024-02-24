import random
import os
import sys


rock = """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
"""

paper = """
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
"""

scissors = """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""

art = [rock,paper,scissors]
types = ['rock', 'paper', 'scissors']
randomNumber1 = random.randint(0,2)
computerPick = types[randomNumber1]
userPick = input(''' Choose: 'rock', 'paper', 'scissors' ''')
userPickNumber = types.index(userPick)

print(randomNumber1, userPickNumber)

if userPickNumber == 0 and randomNumber1 == 2:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you won')
elif userPickNumber == 2 and randomNumber1 == 0:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you lost')
elif userPickNumber > randomNumber1:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you won')
elif randomNumber1 > userPickNumber:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you lost')
else:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, it\'s a draw')

restart = input("\nDo you want to play it again program? [y/n] > ")
if restart == "y":
    os.execl(sys.executable, os.path.abspath(__file__), *sys.argv) 
else:
    print("\nThe program will be closed...")
    sys.exit(0)


