let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
function look(tabNom) {
    let div = document.createElement('div');
    tabNom.forEach(value => div.innerText += value + ' ')
    document.body.appendChild(div);
}

// exo 1 . 1
let tabTwo = tableauUn.map( (i) => i ** i);
look(tabTwo);
let tabThree = tableauUn.map( (i) => i * 10);
look(tabThree);
let tabFour = tableauUn.map( (i) => (i + 2) / 16);
look(tabFour);
let tabFive = tableauUn.filter(i => i > 2);
look(tabFive);
let tabSix = tableauUn.filter(i => i % 2 === 0);
look(tabSix);
let tabSeven = tableauUn.filter(i => i * 3 > 10);
look(tabSeven);

// exo 1 . 2
let tab2 = tableauDeux.map( i => i.length);
look(tab2);
let tab3 = tableauDeux.map( i => i + ' à est de longueur de ' + i.length);
look(tab3);
let tab4 = tableauDeux.map( i => i + i);
look(tab4);
let tab5 = tableauDeux.filter(i => i.length > 2+2);
look(tab5);
let tab6 = tableauDeux.filter(i => i.length % 2 === 0);
look(tab6);
let tab7 = tableauDeux.filter(i => i.length - 3 > 10);
look(tab7);