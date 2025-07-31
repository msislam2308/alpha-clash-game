let life = 3;
let score = 0;
function play() {
    document.querySelector('.home').classList.add('hidden');
    document.querySelector('.play').classList.remove('hidden');
    document.querySelector('.result').classList.add('hidden');
    continueGame();
}
function randomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
}
function setKeyBG(letter) {
    const element = document.getElementById(letter.toUpperCase());
    element.classList.add('bg-green-400');
}
function resetKeyBG(letter) {
    const element = document.getElementById(letter.toUpperCase());
    element.classList.remove('bg-green-400');
}
function continueGame() {
    const letter = randomLetter();
    document.querySelector('.letter').textContent = letter;
    console.log('Displayed:', letter);
    setKeyBG(letter);
}
function handleKeyButtonClick(event) {
    const pressedKey = event.key.toUpperCase();
    const displayedLetter = document.querySelector('.letter').textContent;
    if (pressedKey === displayedLetter) {
        console.log('Right key pressed!You got a point!');
        score += 1;
        console.log('Score:', score);
        document.querySelector('.score').textContent = ` ${score}`;
        resetKeyBG(displayedLetter);
        continueGame();
    } else {
        console.log('Incorrect key pressed!You lost a life!');
        life -= 1;
        if (life <= 0) {
            console.log('Game Over');
            document.querySelector('.play').classList.add('hidden');
            document.querySelector('.home').classList.add('hidden');
            document.querySelector('.result').classList.remove('hidden');
            document.querySelector('.fscore').textContent = ` ${score}`;
            console.log('Final Score:', score);
            document.querySelector('.life').textContent = '3';
            document.querySelector('.score').textContent = '0';
        }
        else{
            console.log('Lives left:', life);
            document.querySelector('.life').textContent = `${life}`;
            resetKeyBG(displayedLetter);
            continueGame();
        }
    }
}
document.addEventListener('keyup', handleKeyButtonClick);

