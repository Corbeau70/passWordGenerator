Parfait, j’ai bien capté ton style 😄
On va garder ce ton **pédagogique + cool + imagé**, comme si tu accompagnais quelqu’un en live.

---

# 🔐 Tuto : Crée ton propre Générateur de Mot de Passe !

Salut ! 👋
Aujourd’hui, on va construire ensemble un petit outil ultra utile : un **générateur de mot de passe dynamique**.

L’idée est simple : tu coches ce que tu veux (lettres, chiffres, symboles), tu cliques… et boom 💥 un mot de passe sécurisé apparaît.

Bonus : avec ton design Matrix, on dirait presque que le mot de passe sort d’un terminal secret 😎

---

## 🛠️ L’objectif du projet

On veut une application qui :

1. Génère un mot de passe aléatoire
2. Permet de choisir le type de caractères :

   * lettres
   * chiffres
   * symboles
3. Affiche le résultat directement à l’écran
4. Empêche les erreurs (ex : aucune case cochée)

---

## 🧐 Comment ça marche ? (Étape par étape)

### 1. La “console de contrôle” (DOM)

Avant de générer quoi que ce soit, on récupère les éléments du HTML :

```javascript
const letter = document.getElementById('letter');
const number = document.getElementById('number');
const symbole = document.getElementById('symbole');
const passwordDisplay = document.getElementById('password');
const btn = document.getElementById('btn');
```

👉 Ici, tu construis ton tableau de bord.
Chaque variable correspond à un bouton ou une option.

---

### 2. Les “banques de caractères”

On prépare nos différentes catégories :

```javascript
const LETTER_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '&-_=+@^|[{#~}:!';
```

👉 Imagine ça comme des sacs remplis de caractères.
Ensuite, on va choisir dans quels sacs on a le droit de piocher.

---

### 3. Le mélange magique 🧪

On construit une chaîne de caractères en fonction des cases cochées :

```javascript
let chars = '';

if (letter.checked) chars += LETTER_CHARS;
if (number.checked) chars += NUMBER_CHARS;
if (symbole.checked) chars += SYMBOL_CHARS;
```

👉 Si l’utilisateur coche lettres + chiffres, alors on mélange les deux sacs.

---

### 4. Le tirage aléatoire 🎲

Maintenant, on génère le mot de passe :

```javascript
for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    generatedPassword += chars[randomIndex];
}
```

👉 À chaque tour de boucle :

* on choisit un caractère au hasard
* on l’ajoute au mot de passe

C’est comme tirer des lettres dans un chapeau 🎩

---

### 5. Le garde du portail 🚫

On empêche les erreurs :

```javascript
if (chars === "") {
    passwordDisplay.innerHTML = "<p style='color:red'>Cochez une option !</p>";
    return;
}
```

👉 Si rien n’est sélectionné, on bloque tout.

---

### 6. L’interaction utilisateur

On déclenche la génération au clic :

```javascript
btn.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});
```

👉 `preventDefault()` empêche le formulaire de recharger la page.
Sinon, ton mot de passe disparaît aussi vite qu’il est apparu 🫠

---

## 🎨 Le petit bonus stylé

Ton projet ne se contente pas de fonctionner… il **impressionne visuellement**.

* Fond animé façon Matrix 🟦
* Effets lumineux
* Interface sombre et immersive

👉 Résultat : ton générateur a une vraie identité, pas juste un outil basique.

---

## 💡 Les petites subtilités à connaître

* **Les checkbox (`checked`) :** elles permettent de créer une logique dynamique (le code s’adapte à l’utilisateur)
* **`Math.random()` :** cœur du système aléatoire
* **`innerHTML` :** permet d’afficher du contenu stylé (texte + HTML)
* **La boucle `for` :** génère chaque caractère un par un

---

## 🚀 Ce que tu pourrais rajouter (niveau supérieur)

Si tu te sens chaux voici des trucs que tu pourrais rajouter 😏 :

* 🔐 Bouton **copier le mot de passe**
* 📏 Choisir la **longueur personnalisée**
* 📊 Ajouter une **barre de sécurité**
* 🧠 Forcer au moins 1 caractère de chaque type sélectionné
* ⚡ Génération automatique au chargement

---

## 🧠 Conclusion

Ce projet a l’air simple… mais il est très puissant pour progresser :

👉 tu manipules le DOM
👉 tu gères des conditions
👉 tu construis une vraie logique
👉 tu crées une UI interactive

C’est exactement le genre de projet parfait pour un portfolio 💼
