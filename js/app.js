import { words } from "./word.js";

const wordText = document.querySelector('.content .word')
const hitText = document.querySelector('.content .hint');
const refresButton = document.querySelector('.buttons .refresh-word');
const input = document.querySelector('.content input');
const timeText = document.querySelector('.details .hint b')
const chekedBtn = document.querySelector('.buttons .cheket-word');

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.textContent = maxTime
        };
        clearInterval(timer);
        alert('time of!!!! was the correct word');
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(30);

    let ramdomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = ramdomObj.palabra.split('');

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        // let temp = wordArray[i];
        // wordArray[i] = wordArray[j];
        // wordArray[j] = wordArray[i];

    };
    wordText.textContent = wordArray.join('')
    hitText.textContent = ramdomObj.pista;
    correctWord = ramdomObj.palabra.toLocaleLowerCase();
    input.value = '';
    input.setAttribute('maxlength', correctWord.length);
};

initGame();

const cheketWord = () => {
    let userWord = input.value.toLocaleLowerCase();

    if (!userWord) return alert('please enter a word');
    if (userWord !== correctWord) return alert(`Opps ${userWord} is Not correct Word`)

    alert(` ${userWord.toUpperCase()} is correct Word`);

    initGame();
};

refresButton.addEventListener('click', initGame);
chekedBtn.addEventListener('click', cheketWord);
