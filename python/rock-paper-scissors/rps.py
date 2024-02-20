import random

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
randomNumber1 = random.randint(0,3) -1
computerPick = types[randomNumber1]
userPick = input(''' Choose: 'rock', 'paper', 'scissors' ''')
userPickNumber = types.index(userPick)

if userPickNumber > randomNumber1:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you won')
elif randomNumber1 > userPickNumber:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, you lost')
else:
    print(art[randomNumber1])
    print(f'Computer picked {computerPick}, it\'s a draw')



