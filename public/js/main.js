let compteurs = [
    { debut: 0, limite: 1500, intervalle: 1, id: 'compteur1' },
    { debut: 0, limite: 2000, intervalle: 1, id: 'compteur2' },
    { debut: 0, limite: 1750, intervalle: 1, id: 'compteur3' },
];

// Fonction compteur
function compteur(i) {
    compteurs[i].debut += 1; //? Incrementation du compteur a chaque appel de la fonction
    document.getElementById(compteurs[i].id).innerText = compteurs[i].debut;  //? Affichage de la valeur du compteur dans un element HTML

    if (compteurs[i].debut === compteurs[i].limite) {
        clearInterval(compteurs[i].intervalle);   //? la fonction s'arrete si le compteurs est egal a sa limite
    }
}

// Initialisation des compteurs
for (let i = 0; i < compteurs.length; i++) {
    let index = i;
    compteurs[i].intervalle = setInterval(function() {
        compteur(index);
    }, compteurs[i].intervalle);
};



