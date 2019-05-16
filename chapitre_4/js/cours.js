//modifie la couleur et les marges.
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

//modifie les propriété CSS
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

//récupère les propriètés <style> des elements
var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

//récupère les propriété CSS
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB