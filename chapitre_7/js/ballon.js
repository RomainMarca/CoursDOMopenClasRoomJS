let demarrerElt = document.getElementById("demarrer");
let arreterElt = document.getElementById("arreter");
let ballonElt = document.getElementById("ballon");

let vitesse = 10;
let animationId = null;
let ballonWidth = parseFloat(getComputedStyle(ballonElt).width);
let sensMove = 0;
let xMax = window.innerWidth; 

arreterElt.addEventListener("click", function(e) {
    stop();
});
demarrerElt.addEventListener("click", function(e) {
    start()
});

function deplacerBallon() {
    let xBallon = parseFloat(getComputedStyle(ballonElt).left);
    
    if (xBallon + ballonWidth >= xMax - 5) {
        cancelAnimationFrame(animationId);
        sensMove = -1;
    } else if (xBallon < 1) {
        sensMove = 1;
        cancelAnimationFrame(animationId);
    }

    //Deplacement
    if (sensMove === 1) {
        ballonElt.style.left = (xBallon + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBallon);
    } else {
        ballonElt.style.left = (xBallon + (vitesse * -1)) + "px";
        animationId = requestAnimationFrame(deplacerBallon);
    }
}

function start() {
    animationId = requestAnimationFrame(deplacerBallon);
    arreterElt.disabled = false;
    demarrerElt.disabled = true;
}

function stop() {
    cancelAnimationFrame(animationId);
    demarrerElt.disabled = false;
    arreterElt.disabled = true;
}
