function makeRed() {
        document.body.style.background = "red"
}

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeblue;

function makeblue() {
        document.body.style.background = "blue";
}

// option 3 
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick= function makePurple() {
        document.body.style.background = "purple";
}

// option 4
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener('click', function makePink() {
        document.body.style.background = "pink";
})