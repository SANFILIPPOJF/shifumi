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
    let choixIA = randomShifumi

    if (choixIA == "mi"){
        return "Gagné"}
        
        else if (choixIA == "fu"){
            return "Perdu"
        }
        else {
            return "Egalité" 
            //fonction qui reviens au début de la manche
    }

}

function buttonFu(){
    choixIA = randomShifumi;
    if(choixIA=="fu"){
        return("perdu")
    }else if(choixIA=="Mi"){
        return("gagné")
    }
    if(choixIA=="Fu"){
        return("égalité")
    }

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

function test{
    console.log(buttonFu);
    console.log(buttonMi);
    console.log(buttonShi);
}
