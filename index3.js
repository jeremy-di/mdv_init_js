// Partie 1 - Récupérez les données de l'URL 
fetch('https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets/duree-dattente-aux-mairies-en-temps-reel/records?limit=20')
  .then(response => response.json())
  .then(data => {
    const mairies = data.results.map(result => new Mairie(
        result.name,
        result.isopen,
        result.realtimestatus,
        result.dayschedule,
        result.averagewaitingtime
    ));
    console.log(mairies);

    // Partie 2 - Affichez les mairies ouvertes

    const mairiesOuvertes = mairies.filter(mairie => mairie.statut === 1);
    console.log("marie ouverte : ", mairiesOuvertes);

    // Partie 2 - Ordonnez les mairies par temps moyen d'attente et si égalité, par ordre alphabétique
    
    const mairiesTriees = mairiesOuvertes.sort((a, b) => {
        return a.tempsAttente - b.tempsAttente;
      });
      console.log("Mairies triées :", mairiesTriees); 
      
    // Partie 3 - Affichez le nombre de minutes d'ouverture global pour toutes les mairies

    const totalMinutesOuverture = mairiesOuvertes.reduce((accumulator, mairie) => {
        const schedule = mairie.horaire[0];
        const openingMinutes = (schedule.closingHour * 60 + schedule.closingMinute) 
                              - (schedule.openingHour * 60 + schedule.openingMinute);
        return accumulator + openingMinutes;
      }, 0);
      
      console.log(`le nombre de minutes d'ouverture global pour toutes les mairies est de : ${totalMinutesOuverture} minutes`);
      
  })
  .catch(error => console.error('Erreur lors de la récupération des données:', error));

//   Partie bonus - 

function Mairie(nom, statut, ouverture, horaire, tempsAttente)
{
    this.nom = nom;
    this.statut = statut
    this.ouverture = ouverture
    this.horaire = JSON.parse(horaire)
    this.tempsAttente = tempsAttente
}


