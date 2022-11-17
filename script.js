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
    if (choixIA == "mi"){
        console.log("Gagné");
    }else if (choixIA == "fu"){
        console.log("Perdu");
    }else {
        console.log("Egalité");
    }
}
/* fonction commandée par le bouton Fu */
function buttonFu(){
    choixIA = randomShifumi();
    player.src = "/img/fu.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Fu Vs IA: ${choixIA}`);
    quiGagne("fu",choixIA);
}
/* fonction commandée par le bouton Mi */
function buttonMi(){
    choixIA = randomShifumi();
    player.src = "/img/mi.png";
    ia.src = `/img/${choixIA}.png`;
    console.log(`Player: Mi Vs IA: ${choixIA}`);
    if (choixIA == "shi"){
        console.log("Gagné");
    }else if (choixIA == "fu"){
        console.log("Perdu");
    }else {
        console.log("Egalité");
    }
}
/* fonction qui retourne si le joueur ayant fait le choixA gagne, perd, ou a une nouvelle chance  */
function quiGagne (choixA,choixB){
    if ((choixA=="shi" && choixB=="mi") || (choixA=="fu" && choixB=="shi") || (choixA=="mi" && choixB=="fu")){
        console.log( 'Player gagne');
        return;
    }else if ((choixA=="shi" && choixB=="fu") || (choixA=="fu" && choixB=="mi") || (choixA=="mi" && choixB=="shi")){
        console.log('IA gagne');
        return;
    }else{
        console.log('Egalité');
        return;
    }
}
/* fonction qui affiche le choix determiné pour un joueur determiné */
function afficheChoix (choix,joueur){

}
/* fonction qui fait evoluer l'affichage du score */ 
function AfficheScore (tabScore){

}
/* fonction testant la fin des 3 manches */
function testNbPts (){

}
/* fonction restart qui initialise la partie */
function restart(){
    
}
/* fonction qui masque un element */
function masquer(element){

}
/* fonction qui affiche un element */
function afficher(element){
    
}