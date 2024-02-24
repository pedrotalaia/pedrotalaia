from flask import Flask, render_template, request, jsonify
import rps  # Assuming your game logic is in rps.py and is appropriately adjusted to be used as a module

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # This will render the HTML file for the game's UI

@app.route('/play', methods=['POST'])
def play():
    user_choice = request.json['choice']
    result = rps.play_game(user_choice)  # You'll need to modify rps.py to have a function that takes user input and returns the game result
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)