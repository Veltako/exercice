console.log('Fichier main.js en place.')

let compteur = 6 ;

let nombreClics = 6;
function comptage() {
    compteur--;
    document.getElementById("nombreClics").textContent   = compteur;
    if ( compteur == 0){
        compteur = 7;
        document.getElementById('table').style = 'position: absolute;';
    }else {
        document.getElementById('table').style = 'position: relative;';
    }
}
document.getElementById("boutonClic").addEventListener("click", comptage);
