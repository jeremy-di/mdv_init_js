let choix = parseInt(prompt("Choisissez un exercice à exécuter entre 1 et 4"));

switch (choix) {
    case 1:
        let nombre1 = parseInt(prompt("Entrez le premier entier : "));
        let nombre2 = parseInt(prompt("Entrez le deuxième entier : "));

        if ( nombre1 > nombre2 ) {
            console.log("Le plus grand nombre est : " + nombre1);
            window.alert("Le plus grand nombre est : " + nombre1);
        } else if ( nombre2 > nombre1 ) {
            console.log("Le plus grand nombre est : " + nombre2);
            window.alert("Le plus grand nombre est : " + nombre2);
        } else {
            console.log("Les deux nombres sont égaux : " + nombre1);
            window.alert("Les deux nombres sont égaux : " + nombre1);
        }
        break;
    case 2:
        let nombre3 = parseInt(prompt("Entrez le premier entier : "));
        let nombre4 = parseInt(prompt("Entrez le deuxième entier : "));

        let produit = nombre3 * nombre4;

        if ( produit > 0 ) {
            console.log("Le signe du produit est : +");
            window.alert("Le signe du produit est : +");
        } else if ( produit < 0 ) {
            console.log("Le signe du produit est : -");
            window.alert("Le signe du produit est : -");
        } else {
            console.log("Le produit est égal à 0");
            window.alert("Le produit est égal à 0");
        }
        break;
    case 3:
        let nombre5 = parseInt(prompt("Entrez le premier entier : "));
        let nombre6 = parseInt(prompt("Entrez le deuxième entier : "));
        let nombre7 = parseInt(prompt("Entrez le troisième entier : "));

        let nombres = [nombre5, nombre6, nombre7];

        nombres.sort(function compareNb(a, b) {
            return a - b;
        });

        console.log( nombres );
        window.alert( nombres )
        break;
    case 4:
        function nombreEnTexte( nombre ) {
            const nombresEnTexte = {
                9: "neuf",
                19: "dix-neuf",
                29: "vingt-neuf",
                39: "trente-neuf",
                49: "quarante-neuf",
                59: "cinquante-neuf",
                69: "soixante-neuf",
                79: "soixante-dix-neuf",
                89: "quatre-vingt-neuf",
                99: "quatre-vingt-dix-neuf"
            };
            return nombresEnTexte[nombre];
        }
        
        for (let i = 1; i <= 100; i++) {
            if ( i % 15 === 0 ) {
                console.log("FizzBuzz");
            }
            else if ( i % 3 === 0 ) {
                console.log("Fizz");
            }
            else if ( i % 5 === 0 ) {
                console.log("Buzz");
            }
            else if ( i % 10 === 9 ) {
                console.log(nombreEnTexte(i));
            }
            else {
                console.log(i);
            }
        }
        break;
    default:
        break;
}

