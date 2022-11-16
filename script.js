const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

let choixIA;
let Score=[0,0];

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
    console.log(`Player: Shi Vs IA: ${choixIA}`);
    if (choixIA == "mi"){
        console.log("Gagné");
    }else if (choixIA == "fu"){
        console.log("Perdu");
    }else {
        console.log("Egalité");
    }
}

function buttonFu(){
    choixIA = randomShifumi();
    player.src = "/img/fu.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Fu Vs IA: ${choixIA}`);
    if(choixIA=="fu"){
        return "perdu";
    }else if(choixIA=="mi"){
        return "gagné";
    } else {
        return "égalité";
    }

}

function buttonMi(){
    choixIA = randomShifumi();
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Mi Vs IA: ${choixIA}`);
    if (choixIA == "shi"){
        
    }else if (choixIA == "fu"){
        return "perdu";
    }else {
        return "gagné";
    }
}

function quiGagne (a,b){

}

function afficheChoix (a,b){

}

function evolutionScore (a){

}