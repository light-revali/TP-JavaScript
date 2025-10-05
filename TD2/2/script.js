//Initialisation des constantes
const tusd = 1.01;
const taud = 1.47;

//On crée un écouteur qui lance la fonction convertir quand l'utilisateur entre une valeur dans le champ de texte
document.getElementById("euros").addEventListener("input", convertir);

//On crée la fonction convertir
function convertir/*version 2*/() {
    //On défini une variable qui prend la valeur du champ de texte concernant les euros
    let euros = document.getElementById("euros").value;
    //Si le champ est vide...
    if (euros === "" ){
        //...alors on n'affiche rien dans les autres champs et on termine la fonction
        document.getElementById("usd").value = "";
        document.getElementById("aud").value = "";
        return;
    }
    //Sinon on calcule les valeurs à afficher dans les autres champs...
    let usd = euros * tusd;
    let aud = euros * taud;
    //...et on limite leur partie décimale à deux chiffres après la virgule
    document.getElementById("usd").value = usd.toFixed(2);
    document.getElementById("aud").value = aud.toFixed(2);
}
