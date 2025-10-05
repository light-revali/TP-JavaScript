//Initialisation des constantes
const tusd = 1.01;
const taud = 1.47;

//On crée une fonction convertir, appelée quand 
// l'utilisateur appuie sur le bouton
function convertir/*version 1*/(){
    //On défini une variable qui prend la valeur du champ de texte concernant les euros
    let euros = document.getElementById("euros").value;
    //Si le champ est vide...
    if(euros === ""){
        //...alors on lance une alerte et on termine la fonction
        alert("aucune valeur entrée");
        return;
    }
    //Sinon on calcule les valeurs à afficher dans les autres champs...
    let usd = euros * tusd;
    let aud = euros * taud;

    //...et on limite leur partie décimale à un chiffre après la virgule
    document.getElementById("usd").value = usd.toFixed(1);
    document.getElementById("aud").value = aud.toFixed(1);
}