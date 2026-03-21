/*
Étapes du projet
1 - Sélectionner les éléments du DOM
2 - Construire la liste des caractères selon les cases cochées
3 - Générer le mot de passe
4 - Ajouter le bouton copier
*/

// Sélection des éléments
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const messageEl = document.getElementById("message");

// Jeux de caractères
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+{}[]<>?/|=-";

// Fonction utilitaire pour afficher un message
function showMessage(text) {
  messageEl.textContent = text;
}

// Fonction qui retourne un index aléatoire
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Fonction qui construit la chaîne de caractères disponible
function buildCharacterPool() {
  let chars = "";

  if (lowercaseEl.checked) {
    chars += LOWERCASE_CHARS;
  }

  if (uppercaseEl.checked) {
    chars += UPPERCASE_CHARS;
  }

  if (numbersEl.checked) {
    chars += NUMBER_CHARS;
  }

  if (symbolsEl.checked) {
    chars += SYMBOL_CHARS;
  }

  return chars;
}

// Fonction de génération
function generatePassword() {
  const length = Number(lengthEl.value);
  const chars = buildCharacterPool();

  showMessage("");

  if (isNaN(length) || length < 4 || length > 50) {
    passwordEl.textContent = "Longueur invalide";
    showMessage("Choisis une longueur entre 4 et 50.");
    return;
  }

  if (chars.length === 0) {
    passwordEl.textContent = "Aucune option sélectionnée";
    showMessage("Coche au moins une case.");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomIndex(chars.length);
    password += chars[randomIndex];
  }

  passwordEl.textContent = password;
  showMessage("Mot de passe généré avec succès.");
}

// Fonction copier
async function copyPassword() {
  const password = passwordEl.textContent;

  if (
    password === "Clique sur “Générer”" ||
    password === "Longueur invalide" ||
    password === "Aucune option sélectionnée"
  ) {
    showMessage("Rien à copier pour le moment.");
    return;
  }

  try {
    await navigator.clipboard.writeText(password);
    showMessage("Mot de passe copié dans le presse-papiers.");
  } catch (error) {
    showMessage("La copie a échoué.");
  }
}

// Events
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);