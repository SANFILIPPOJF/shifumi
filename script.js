const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
let choixIA;

shi.addEventListener('click', buttonShi);
fu.addEventListener('click', buttonFu);
mi.addEventListener('click', buttonMi);

// Pour le reste, a vous de jouer

/*Sandrine */
/* cration des variables, des constantes et tableaux des idéogrammes*/
const iaIdeogrammes = ['Shi','Fu','Mi'];
const nbIdeogrammes = iaIdeogrammes.length;


/* fonction choisissant un idéogramme au hasard dans le tableau */
function randomShifumi(){
   return iaIdeogrammes[Math.floor(Math.random()*nbIdeogrammes)];

}


function buttonShi(){

}

function buttonFu(){

}

function buttonMi(){
    choixIA = randomShifumi;
    console.log(`choix du joueur Mi, choix du IA ${choixIA}`);
    if (choixIA == "Mi"){
        return("egalité");
    }else if (choixIA == "Fu"){
        return("perdu");
    }else {
        return("gagné");
    }
}
console.log(butonMi);