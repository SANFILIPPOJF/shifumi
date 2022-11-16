const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
let choixIA;
let ScoreIA;
let ScorePlayer = 0;

shi.addEventListener('click', buttonShi);
fu.addEventListener('click', buttonFu);
mi.addEventListener('click', buttonMi);

// Pour le reste, a vous de jouer

/*Sandrine */
/* cration des variables, des constantes et tableaux des idéogrammes*/
const iaIdeogrammes = ['shi','fu','mi'];
const nbIdeogrammes = iaIdeogrammes.length;


/* fonction choisissant un idéogramme au hasard dans le tableau */
function randomShifumi(){
    return iaIdeogrammes[Math.floor(Math.random()*nbIdeogrammes)];
}

function buttonShi(){
    choixIA = randomShifumi();
    player.src = "/img/shi.png";
    ia.src = `/img/${choixIA}.png`;
    if (choixIA == "mi"){
        return "Gagné"
    }else if (choixIA == "fu"){
        return "Perdu"
    }else {
        return "Egalité" 
            //fonction qui reviens au début de la manche
    }
}

function buttonFu(){
    choixIA = randomShifumi();
    player.src = "/img/fu.png";
    ia.src = `/img/${choixIA}.png`;
    if(choixIA=="fu"){
        return "perdu"
    }else if(choixIA=="mi"){
        return "gagné"
    } else {
        return "égalité"
    }

}

function buttonMi(){
    choixIA = randomShifumi();
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    if (choixIA == "mi"){
        return"egalité";
    }else if (choixIA == "fu"){
        return "perdu";
    }else {
        return "gagné";
    }
}
