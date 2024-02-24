function play(choice) {
    fetch('/play', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ choice: choice }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.message;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
