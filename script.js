// Sélection des éléments
const letter = document.getElementById('letter');
const number = document.getElementById('number');
const symbole = document.getElementById('symbole');
const passwordDisplay = document.getElementById('password'); // Le conteneur d'affichage
const btn = document.getElementById('btn');

// 1 - Les banques de caractères
const LETTER_CHARS = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '&-_=+@^|[{#~}:!';

// 2 - Fonction pour générer le mot de passe
function generatePassword() {
    let chars = '';
    let generatedPassword = '';
    const passwordLength = 12; // Tu peux changer la longueur ici

    // On vérifie ce qui est coché au moment du clic
    if (letter.checked) chars += LETTER_CHARS;
    if (number.checked) chars += NUMBER_CHARS;
    if (symbole.checked) chars += SYMBOL_CHARS;

    // Si rien n'est coché, on affiche une erreur
    if (chars === "") {
        passwordDisplay.innerHTML = "<p style='color:red'>Cochez une option !</p>";
        return;
    }

    // Boucle pour choisir des caractères aléatoires
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        generatedPassword += chars[randomIndex];
    }

    // 3 - Affichage dans le HTML
    passwordDisplay.innerHTML = `<p><strong>${generatedPassword}</strong></p>`;
}

// 4 - Écouteur d'événement sur le bouton
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche la page de se recharger (comportement par défaut d'un form)
    generatePassword();
});