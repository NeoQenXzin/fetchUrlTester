# Différences entre les versions `index.js` et `index2.js`

## Version `index.js`

Le fichier `index.js` utilise l'approche traditionnelle de `fetch` avec `.then` pour gérer les requêtes asynchrones.

- **Approche Promise** : Le code utilise des promesses avec `.then` pour gérer les opérations asynchrones liées à la récupération des données depuis l'API.

- **Structure séquentielle** : Les opérations liées à la requête, à la gestion des erreurs et à l'affichage des données sont organisées de manière séquentielle à l'aide de `.then` et `.catch`.

- **Affichage des données** : Les données sont affichées dans le DOM en créant des éléments HTML à l'aide de `document.createElement` et en les ajoutant au DOM.

## Version `index2.js`

Le fichier `index2.js` utilise `fetch` avec l'approche `async/await` pour rendre le code plus lisible et gérer les opérations asynchrones de manière synchrone.

- **Permet de tester une url et d'afficher les donnée** : Modifier le fichier html avec les commentaires pour tester

- **Approche Async/Await** : Le code utilise `async/await` pour rendre la gestion des opérations asynchrones plus lisible et faciliter la compréhension du flux d'exécution.

- **Gestion d'erreur améliorée** : Les erreurs sont gérées de manière plus élégante avec un bloc `try...catch`, offrant une meilleure lisibilité et facilitant la gestion des erreurs asynchrones.

- **Affichage des données simplifié** : L'affichage des données est simplifié en utilisant directement des interpolations de chaînes de caractères avec des backticks, ce qui rend le code plus propre.

- **Suppression du contenu "Loading..."** : La suppression du message "Loading..." est effectuée dans le bloc `finally`, assurant qu'elle soit exécutée indépendamment du succès ou de l'échec de la requête.

En résumé, la version `index2.js` offre une approche plus moderne et lisible grâce à l'utilisation d'`async/await` tout en améliorant la gestion des erreurs. Elle simplifie également l'affichage des données, rendant le code plus concis.
