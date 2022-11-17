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
let score={
    player: 0,
    ia: 0
}
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
    choixIA = randomShifumi();
    player.src = "/img/shi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Shi Vs IA: ${choixIA}`);
    quiGagne('shi',choixIA);
    testNbPts();
}
/* fonction commandée par le bouton Fu */
function buttonFu(){
    choixIA = randomShifumi();
    player.src = "/img/fu.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Fu Vs IA: ${choixIA}`);
    quiGagne('fu',choixIA);
    testNbPts();
}

/* fonction commandée par le bouton Mi */
function buttonMi(){
    choixIA = randomShifumi();
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Mi Vs IA: ${choixIA}`);
    quiGagne('mi',choixIA);
    testNbPts();
}
/* fonction qui retourne si le joueur ayant fait le choixA gagne, perd, ou a une nouvelle chance  */
function quiGagne (choixA,choixB){
    if ((choixA=="shi") && (choixB=="mi") || (choixA=="fu") && (choixB=="shi") || (choixA=="mi") && (choixB=="fu")){
        console.log( 'player gagne');
        score.player++;
    }else if ((choixA=="shi" && choixB=="fu") || (choixA=='fu') && (choixB=='mi') || (choixA=='mi') && (choixB=='shi')){
        console.log('IA gagne');
        score.ia++;
    }else{
        console.log('égalité');
    }
    console.log(`Player: ${score.player} Vs IA: ${score.ia}`);
    return;
}
/* fonction qui affiche le choix determiné pour un joueur determiné */
function afficheChoix (choix,joueur){
    joueur.src=`/img/${choix}.png`;
}

/* fonction qui fait evoluer l'affichage du score */ 
function AfficheScore (){
    player.innerHTML=score.player;
    ia.innerHTML=score.ia;
}

/* fonction testant la fin des 3 manches */
function testNbPts (){
    let nbPts = score.player+score.ia;
    if (score.player==2 || score.ia==2) {
        masquerCommand();
        afficherTryAgain();
    console.log('fin de partie');
    }
    else {
        console.log('continuer la partie');
        return;
}
}
/* fonction qui masque les 3 bouttons */
function masquerCommand(){
    command.hidden = true;
}
/* fonction qui affiche les 3 boutons */
function afficherCommand(){
    command.hidden = false;
}
/* fonction qui affiche le bouton "try again" */
function afficherTryAgain(){
    tryAgain.className= 'btn-restart';
}

