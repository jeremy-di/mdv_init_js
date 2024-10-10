        fetch('https://random-data-api.com/api/v2/users?size=10')
            .then(function(res) { return res.json(); })
            .then(function(donnees) {
                donnees
                    .map(function(donnee) {
                        return {
                            h2: donnee.first_name + ' ' + donnee.last_name,
                            h3: donnee.date_of_birth,
                            p: donnee.email,
                            img : donnee.avatar
                        };
                    })
                    .map(function(donnee) {
                        return {
                            baliseH2: document.createElement('h2'),
                            baliseH3: document.createElement('h3'),
                            baliseP: document.createElement('p'),
                            baliseImg : document.createElement('img'),
                            h2: donnee.h2,
                            h3: donnee.h3,
                            p: donnee.p,
                            img: donnee.img
                        };
                    })
                    .map(function(donnee) {
                        donnee.baliseH2.textContent = donnee.h2;
                        donnee.baliseH3.textContent = donnee.h3;
                        donnee.baliseP.textContent = donnee.p
                        donnee.baliseImg.src = donnee.img
                        return [
                            donnee.baliseH2,
                            donnee.baliseH3,
                            donnee.baliseP,
                            donnee.baliseImg
                        ];
                    })
                    .map(function(donnee) {
                        const div = document.createElement('div');
                        div.className="cadre";
                        div.appendChild(donnee[0]);
                        div.appendChild(donnee[1]);
                        div.appendChild(donnee[2]);
                        div.appendChild(donnee[3]);
                        return div;
                    })
                    .forEach(function(div) {
                        document.body.appendChild(div);
                    });
            })
            .catch(function(err) {
                console.error('Erreur lors de la récupération des données:', err);
            });