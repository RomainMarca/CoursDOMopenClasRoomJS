let counterClic = 0;
let activCounter = true;
document.getElementById("clic").addEventListener("click", counter);
document.getElementById("desactiver").addEventListener("click", desactivation);

function counter() {
    if (activCounter) {
        counterClic += 1;
        let counterValue = document.getElementById("compteurClics");
        counterValue.textContent = counterClic;
    }
}

function desactivation() {
    activCounter = false;
}