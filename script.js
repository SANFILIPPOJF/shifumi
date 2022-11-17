/* Les differents liens utiles vers HTML */
const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
const tryAgain = document.getElementById('restart');

let choixIA;
let indexGagnant;
/* Definition du tableau score index 0 = player ; index 1 = IA */
let Score={
    player: 0,
    IA: 0
};
/* declencheurs des boutons du jeu */
shi.addEventListener('click', buttonShi);
fu.addEventListener('click', buttonFu);
mi.addEventListener('click', buttonMi);
tryAgain.addEventListener('click', restart);

/* création des variables, des constantes et tableaux des idéogrammes*/
const iaIdeogrammes = ['shi','fu','mi'];
const nbIdeogrammes = iaIdeogrammes.length;

/* fonction retournant un idéogramme au hasard dans le tableau */
function randomShifumi(){
    return iaIdeogrammes[Math.floor(Math.random()*nbIdeogrammes)];
}

/* fonction commandée par le bouton Shi */
function buttonShi(){
    command.className = "hidden";
    choixIA = randomShifumi();
    player.src = "/img/shi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Shi Vs IA: ${choixIA}`);
    quiGagne('shi',choixIA)
}
/* fonction commandée par le bouton Fu */
function buttonFu(){
    choixIA = randomShifumi();
    player.src = "/img/fu.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Fu Vs IA: ${choixIA}`);
    quiGagne('fu',choixIA);
}

/* fonction commandée par le bouton Mi */
function buttonMi(){
    choixIA = randomShifumi();
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Mi Vs IA: ${choixIA}`);
    quiGagne('mi',choixIA)
}
/* fonction qui retourne si le joueur ayant fait le choixA gagne, perd, ou a une nouvelle chance  */
function quiGagne (choixA,choixB){
    if ((choixA==shi) && (choixB==mi) || (choixA==fu) && (choixB==shi) || (choixA==mi) && (choixB==fu)){
        console.log( 'player gagne')
        return 0
    }else if ((choixA==shi && choixB==fu) || (choixA==fu) && (choixB==mi) || (choixA==mi) && (choixB==shi)){
        console.log('IA gagne').
        return 1
    }else{
        console.log('aucun ne gagne')
        return
    }
}
/* fonction qui affiche le choix determiné pour un joueur determiné */
function afficheChoix (choix,joueur){
joueur.src=`/img/${choix}.png`
}

/* fonction qui fait evoluer l'affichage du score */ 
function AfficheScore (){
        player.innerHTML=score.player;
        ia.innerHTML=score.ia;
}

/* fonction testant la fin des 3 manches */

/* fonction qui fait evoluer l'affichage du score */

function affichescore (tabScore){
}
}
/* fonction restart qui initialise la partie */
function restart(){
<<<<<<< HEAD
    console.log ('nouvelle partie');
    console.log(`score: player ${Score[0]} IA: ${Score[1]}`);
=======
    
}
/* fonction qui masque un element */
function masquer(element){

}
/* fonction qui affiche un element */
function afficher(element){
    
>>>>>>> 198fd47aa1c975d4bba190e216575859051a30c8
}
