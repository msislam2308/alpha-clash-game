let score = 0;
let life = 3;
function play() {
    document.querySelector('.home').classList.add('hidden');
    document.querySelector('.play').classList.remove('hidden');
    console.log('Game Started');
    continueGame();
}
function randomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}
function setLetterBg(letter) {
    const element = document.getElementById(letter.toLowerCase());
    element.classList.add('bg-orange-600');
}
function resetLetterBg(letter) {
    const element = document.getElementById(letter.toLowerCase());
    element.classList.remove('bg-orange-600');
}

function continueGame() {
    const letter = randomLetter();
    document.querySelector('.letter').textContent = letter;
    console.log("Current Letter: " + letter);
    setLetterBg(letter);
}


function handleKeyButtonClick(event) {
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        console.log('Game Ended');
        document.querySelector('.play').classList.add('hidden');
        document.querySelector('.result').classList.remove('hidden');
        document.querySelector('.home').classList.add('hidden');
        document.querySelector('.fscore').textContent = ` ${score}`;
        console.log('Final Score:', score);
    }
    const pressedKey = event.key.toUpperCase();
    const displayedLetter = document.querySelector('.letter').textContent;
    if (pressedKey === displayedLetter) {
        console.log('Right key pressed!You got a point!');
        score += 1;
        console.log('Score:', score);
        document.querySelector('.score').textContent = ` ${score}`;
        resetLetterBg(displayedLetter);
        document.querySelector('.artboard').classList.add('bg-green-600');
        setTimeout(() => {
            document.querySelector('.artboard').classList.remove('bg-green-600');
        }, 300);
        continueGame();
    }
    else {
        life -= 1;
        document.querySelector('.artboard').classList.add('bg-red-600');
        setTimeout(() => {
            document.querySelector('.artboard').classList.remove('bg-red-600');
        }, 300);
        if (life <= 0) {
            console.log('Wrong key pressed! You have no lives left!');
            console.log('Game Over');
            document.querySelector('.play').classList.add('hidden');
            document.querySelector('.home').classList.add('hidden');
            document.querySelector('.result').classList.remove('hidden');
            document.querySelector('.fscore').textContent = ` ${score}`;
            console.log('Final Score:', score);
            document.querySelector('.life').textContent = '3';
            document.querySelector('.score').textContent = '0';
        }
        else {
            console.log('Wrong key pressed! You lost a life!');
            console.log('Lives left:', life);
            document.querySelector('.life').textContent = `${life}`;
            resetLetterBg(displayedLetter);
            continueGame();
        }
    }
}
document.addEventListener('keyup', handleKeyButtonClick);

function playAgain() {
    score = 0;
    life = 3;
    document.querySelector('.result').classList.add('hidden');
    document.querySelector('.play').classList.remove('hidden');
    document.querySelector('.life').textContent = '3';
    document.querySelector('.score').textContent = '0';
    console.log('Game Restarted again');
}
function reset() {
    console.log('Game Reset');
    score = 0;
    life = 3;
    resetLetterBg(document.querySelector('.letter').textContent);
    document.querySelector('.result').classList.add('hidden');
    document.querySelector('.home').classList.remove('hidden');

}

