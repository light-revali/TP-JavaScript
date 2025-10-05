//On sélectionne la balise renfermant le lien vers le site officiel de wikipedia
const wiki = document.querySelector('a[href="https://wikipedia.org"]');
//On modifie l'attribut href de cette balise par le lien vers le site français
wiki.href = "https://fr.wikipedia.org";

//On sélectionne l'intégralité du formulaire
const formulaire = document.querySelector('form');
//On sélectionne la première zone de texte du formulaire
const texte = document.querySelector('#champ1');

//On créé une fonction qui se lancera quand l'évènement 'submit' sera enclenché
formulaire.addEventListener('submit', function(event){
    //On prend le contenu de la zone de texte et on le transforme en minuscule et on enlève les espaces
    const val = texte.value.toLowerCase().trim();
    //si la valeur transformée vaut "oui" ou "non"...
    if (val === "oui"|| val === "non"){
        //...alors on envoie une alerte disant que la formulaire a bien été envoyé
        alert("formulaire envoyé")
    //sinon...
    } else{
        //...on empêche l'envoi du formulaire...
        event.preventDefault();
        //...et on indique à l'utilisateur la marche à suivre en modifiant le contenu de la zone de texte
        texte.value = "Il faut mettre Oui ou Non";
    }
})


//On prend chaque bouton radio du fichier html...
const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");

//...puis on change leur nextSibling (ce qu'il y a juste après dans le fichier html)
r1.nextSibling.textContent = "HP";
r2.nextSibling.textContent = "Casque";
r3.nextSibling.textContent = "Bluetooth";


//On créé une liste de chaque élément s'appelant "choix" dans le fichier html
const radios = document.querySelectorAll('input[name="choix"]');

//On prend l'élement html associé à la barre de volume
const volume = document.querySelector('#volume');

//On prend chaque élement de la liste créée précédemment...
radios.forEach(radio => {
    //...puis on lance la fonction suivante si la sélection est modifiée
    radio.addEventListener('change', function() {

        //On créé une variable de texte vide
        let texte = "";

        //On regarde quel bouton radio est sélectionné
        //Puis on modifie la variable de texte vide définie précédemment en conséquence
        if (this.value == "1") {
            texte = "Volume HP";
        } else if (this.value == "2") {
            texte = "Volume Casque";
        } else if (this.value == "3") {
            texte = "Volume Bluetooth";
        }

        //Enfin on remplace le libelé du volume
        volume.nextSibling.nodeValue = texte;
    });
});


//On se sert de la variable définie plus haut pour en modifier le maximum
volume.max = 100;
//Puis on affiche ce maximum dans la console
console.log(volume.max);


//On récupère la valeur actuelle du volume...
const volumeValue = document.getElementById("volval");
//...puis on lance la fonction suivante si elle est modifiée
volume.addEventListener("input", function() {
    //On remplace la valeur du libelé par la nouvelle valeur du volume sur la page html
    volumeValue.textContent = this.value;
});


//On sélectionne la balise label liée à la checkbox dans le code html
const labelMute = document.querySelector("label[for='ouinon']");
//On modifie son texte
labelMute.textContent = "Mute";

//On récupère l'élément relié à la checkbox
const muteCheckbox = document.getElementById("ouinon");

//On lance la fonction suivante si la case est cochée ou décochée
muteCheckbox.addEventListener("change", function () {
    //Si la checkbox est cochée...
    if (this.checked) {
        //...alors on désactive les intéractions avec le modificateur du volume
        volume.disabled = true;
    //Si la checkbox est décochée...
    } else {
        //...alors on réactive les intéractions
        volume.disabled = false;
    }
});


//On récupère l'élément représentant la section supérieure de la page html
const topSection = document.getElementById("topsection");

//On créé un nouvel élément afin de pouvoir l'ajouter plus tard
const nouvelleImage = document.createElement("img");
//On modifie l'attribut src en y ajoutant le chemin vers l'image souhaitée
nouvelleImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
//On modifie l'attribut width de la nouvelle image
nouvelleImage.width = 200;

//On utilise appendChild sur la nouvelle image afin de l'ajouter à la fin de topsection, comme si on rajoutait manuellement une balise img dans le code html
topSection.appendChild(nouvelleImage);


//On récupère l'élément relié à la zone d'input de date dans le fichier html
const dateInput = document.getElementById("date");

//On lance la fonction suivante si la date est modifiée
dateInput.addEventListener("change", function () {
    //On initialise une nouvelle variable avec la date actuellement dans la zone d'input
    const dateValue = this.value;

    //Si la date est une valeur non nulle/vide...
    if (dateValue) {
        //...alors on créé un objet date à partir de la valeur fournie puis on extrait l'année uniquement...
        const year = new Date(dateValue).getFullYear();
        //...puis on l'affiche dans la console
        console.log("Année choisie :", year);
    }
});


//On récupère l'élément relié à la barre de progression
const progressBar = document.getElementById("progress");
//On récupère l'élement relié à la seconde barre de progression
const meterBar = document.getElementById("meter");

//On initialise les valeurs des deux barres à 0
progressBar.value = 0;
meterBar.value = 0;

//On créé une fonction de mise à jour pour la valeur des barres de progression
function updateBars() {
    //Si la valeur de la barre n'a pas encore atteint 100%...
    if (progressBar.value < 100) {
        //...alors on l'augmente de 5%
        progressBar.value += 5;
    }
    //Idem pour la deuxième barre
    if (meterBar.value < 100) {
        //Idem pour la deuxième barre
        meterBar.value += 5;
    }

    //Si les deux barres sont à 100%...
    if (progressBar.value >= 100 && meterBar.value >= 100) {
        //...alors on arrête le timer
        clearInterval(timer);
    }
}

//On appelle la fonction avec un intervalle d'une seconde à chaque fois
const timer = setInterval(updateBars, 1000);


//On lance la fonction suivante après que la page html se soit chargée
document.addEventListener("DOMContentLoaded", function () {
    //On initialise une liste avec les différents id des sections de la page html
    const sections = ["topsection", "midsection", "botsection"];
    //Pour chaque section...
    for (let i = 0; i < sections.length; i++) {
        //...on repère où elle est dans le fichier html...
        const element = document.getElementById(sections[i]);
        //...puis on la cache avec l'attribut display
        element.style.display = "none";
    }

    //On initialise une liste pour chaque checkbox dans le menu tout en haut de la page html
    const checkboxes = document.querySelectorAll('.toggle');

    //Pour chaque checkbox du menu...
    checkboxes.forEach(checkbox => {
        //...on la décoche d'office après le chargement du site 
        // (évite les erreurs au cas où elles resteraient cochées après un rechargement du site)
        checkbox.checked = false;
    });

    //Pour chaque checkbox...
    for (let i = 0; i < checkboxes.length; i++) {
        //...on lance la fonction suivante si elle est cochée ou décochée
        checkboxes[i].addEventListener('change', function () {
            //On initialise une variable avec la valeur de la checkbox (la section à laquelle elle est associée)
            const targetId = this.value;
            //On récupère l'élément relié à la section en question dans le code html
            const section = document.getElementById(targetId);

            //Si la checkbox est cochée...
            if (this.checked) {
                //...alors on affiche la section associée
                section.style.display = "block";
            //Si elle est décochée...
            } else {
                //...on cache la section associée
                section.style.display = "none";
            }
        });
    }
});