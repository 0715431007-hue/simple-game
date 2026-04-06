console.log("script started");

function start(){
    console.log("click");

    //start level 1
    let num = getRandomNumber();
    createCircle(num);
    createCircle(num);

    num = getRandomNumber();
    createCircle(num);
    createCircle(num);

    num = getRandomNumber();
    createCircle(num);
    createCircle(num);

    num = getRandomNumber();
    createCircle(num);
    createCircle(num);
}

function createCircle(num) {
    //create div for circle
    let circle = document.createElement("div");

    //set text to a number
    circle.innerText = num;

    //set color/shape/font/etc
    circle.style.backgroundColor = "white";
    circle.style.fontSize = "25px";
    circle.style.borderRadius = "30px";
    circle.style.alignContent = "center";
    circle.style.textAlign = "center";
    circle.style.height = "60px";
    circle.style.width = "60px";
    circle.style.position = "absolute";

    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    //add circle to page
    document.body.appendChild(circle);
}

//generates random x coordinates
function getRandomX() {
    let randomX = Math.random() * window.innerWidth;
    return randomX;
}

function getRandomY() {
    let randomY = Math.random() * window.innerHeight;
    return randomY;
}

function getRandomNumber() {
    let random = Math.random() * 100;
    random = Math.floor(random);
    return random;
}