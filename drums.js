// Active button animations
document.addEventListener("keydown", activateButton);
document.addEventListener("keyup", deactivateButton);

// Create audio vars
var clap = new Audio("sounds/clap.wav");
var hihat = new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var boom = new Audio("sounds/boom.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tom = new Audio("sounds/tom.wav");
var tink = new Audio("sounds/tink.wav");

function activateButton(e) {
    switch (e.keyCode) {
        case 65:
            document.getElementById("clap").classList.add("active");
            clap.play();
            break;
        case 83:
            document.getElementById("hihat").classList.add("active");
            hihat.play();
            break;
        case 68:
            document.getElementById("kick").classList.add("active");
            kick.play();
            break;
        case 70:
            document.getElementById("openhat").classList.add("active");
            openhat.play();
            break;
        case 71:
            document.getElementById("boom").classList.add("active");
            boom.play();
            break;
        case 72:
            document.getElementById("ride").classList.add("active");
            ride.play();
            break;
        case 74:
            document.getElementById("snare").classList.add("active");
            snare.play();
            break;
        case 75:
            document.getElementById("tom").classList.add("active");
            tom.play();
            break;
        case 76:
            document.getElementById("tink").classList.add("active");
            tink.play();
            break;
        default:

    }
}

function deactivateButton(e) {
    switch (e.keyCode) {
        case 65:
            document.getElementById("clap").classList.remove("active");
            break;
        case 83:
            document.getElementById("hihat").classList.remove("active");
            break;
        case 68:
            document.getElementById("kick").classList.remove("active");
            break;
        case 70:
            document.getElementById("openhat").classList.remove("active");
            break;
        case 71:
            document.getElementById("boom").classList.remove("active");
            break;
        case 72:
            document.getElementById("ride").classList.remove("active");
            break;
        case 74:
            document.getElementById("snare").classList.remove("active");
            break;
        case 75:
            document.getElementById("tom").classList.remove("active");
            break;
        case 76:
            document.getElementById("tink").classList.remove("active");
            break;
        default:

    }
}
