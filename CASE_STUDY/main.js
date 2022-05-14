const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEle = document.getElementById("score");
const timeEle = document.getElementById("time");
const endgameEle = document.getElementById("end-game-container");
const finalScoreEle = document.getElementById("final-score");
const settingBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words
const easyWords = [
    "sigh",
    "sign",
    "ball",
    "eat",
    "play",
    "admit",
    "drag",
    "bad",
    "good",
    ""
];

const mediumWords = [
    "airplane",
    "warlike",
    "feeble",
    "loving",
    "interest",
    "dependent",
    "highfalutin",
    "superficial",
];

const hardWords = [
    "the quick brown fox jumps over the lazy dog",
    "taking my dog for a walk is fun",
    "walking in the rain can be difficult",
    "strolling along a beach at sunset is romantic",
    "getting a promotion is exciting",
    "signing autographs takes time",
    "going for ice cream is a real treat",
    "singing for his supper was how he earned his keep"
];

let randomWord;
let score = 0;
let time = 10;
let difficulty = localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";

// Set difficulty 
difficultySelect.value = difficulty;

// Focus on text on start
text.focus();

// Count down
const timeInterval = setInterval(updateTime, 1000);

// Update time
function updateTime() {
    time--;
    timeEle.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}


// Show game over
function gameOver() {
    finalScoreEle.innerHTML = score;
    endgameEle.style.display = "flex";
}

// get randomWord
function getRandomWord() {
    let words;
    if (difficulty === "easy") {
        words = easyWords;
    } else if (difficulty === "medium") {
        words = mediumWords;
    } else if (difficulty === "hard") {
        words = hardWords;
    }
    return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// update score
function UpdateScore() {
    score++;
    scoreEle.innerHTML = score;
}

addWordToDOM();


text.addEventListener("input", e => {
    // let audio = document.getElementById("audio");
    // audio.currentTime = 0;
    // audio.play();
    const insertedText = e.target.value;
    console.log(insertedText);
    if(insertedText === randomWord) {
        addWordToDOM();
        UpdateScore();
        e.target.value = "";
        time = 10;
    } 
})

// settings button click
settingBtn.addEventListener("click", () => {
    settings.classList.toggle("hide");
});

// Setting select 
settingsForm.addEventListener("change", e => {
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
    location.reload();
})