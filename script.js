const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
let choixIA;
let ScoreIA;
let ScorePlayer;

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

function imageIa (){
    if(randomShifumi==shi){
        return ia.setAttribute("src","/img/shi.png")
    }else if(randomShifumi==fu){
        return ia.setAttribute("src","/img/fu.png")
    }else(randomShifumi==mi){
        return ia.setAttribute("src","/img/mi.png")
    }
}

function buttonShi(){
    let choixIA = randomShifumi();
    player.setAttribute("src","/img/shi.png")
    console.log(`choix du joueur Shi, choix du IA ${choixIA}`);
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
    player.setAttribute("src","/img/fu.png")
    console.log(`choix du joueur Fu, choix du IA ${choixIA}`);
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
<<<<<<< HEAD
    player.setAttribute("src","/img/mi.png")
    console.log(`choix du joueur Mi, choix du IA ${choixIA}`);
    if (choixIA == "Mi"){
=======
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    if (choixIA == "mi"){
>>>>>>> 734b04cdb921123268edc99ceded3fcb871bc5c8
        return"egalité";
    }else if (choixIA == "Fu"){
        return "perdu";
    }else {
        return "gagné";
    }
}
