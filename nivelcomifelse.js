let heroi = " joel "
let nivel;
let xp = 9700

if (xp <= 1000 ) {
    nivel = " Ferro ";
} 

    else if (xp >= 1001 && xp <= 2000) {
         nivel = " Bronze ";}   
    else if (xp >= 2001 && xp <= 5000) {
        nivel = " Prata "; }
    else if (xp >= 5001 && xp <= 6000) {
        nivel = " Ouro "; }
    else if (xp >= 6001 && xp <= 7000) {
        nivel = " Platina "; } 
    else if (xp >= 7001 && xp <= 8000) {
        nivel = " Ascendente "; } 
    else if (xp >= 8001 && xp <= 9000) {
        nivel = " Imortal "; } 
    else if (xp >= 9000){
        nivel = " Radiante "; }

    console.log( " O heroí" + heroi + " é de Ranking: " + nivel
    )