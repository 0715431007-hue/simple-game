console.log("script started");

function start(){
    console.log("click");

    //start level 1
    createCircle();
}

function createCircle() {
    //create div for circle
    let circle = document.createElement("div");

    //set text to a number
    circle.innerText = "1";

    //set color/shape/font/etc
    circle.style.backgroundColor = "white";
    circle.style.fontSize = "25px";

    //add circle to page
    document.body.appendChild(circle);
}