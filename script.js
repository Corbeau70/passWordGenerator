/* 
Etape pour réaliser le projet 
    1 - Sélectionner les éléments
    2 - Créer la fonction pour les mots de passe aléatoire
    3 - Créer l'event pour intéragir avec la page
*/

// Selection des éléments
const btn = document.getElementById('btn');
const password = document.getElementById('password');
const nbr = document.getElementById('number')

//Créer le mots de passe aléatiore
function randomPassword(){
    const chart = [`abcdefghijjklmnopqrstuvwxtzABCDEFGHIJKLMOPQKSTUVWXYZ0123456789&"'-_=:;,!/;`]
    let pw = ''
    for(let i = 0; i <= 9 ; i++){
        pw += chart[Math.floor(Math.random()*75)]
    }
    
    return pw;
};

// Créer l'event pour intéragir avec la page
// a - attribuer la nouvelle valeur à password

function newPassword(){
    password.textContent = randomPassword()
};

// b - Créer l'event

btn.addEventListener('click',newPassword)