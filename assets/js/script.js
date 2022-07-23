/**
 * Collection de jeux vidéos
 */
const COLLECTION = [
  {
    title: "Halo",
    developer: "Ensemble studio",
    releaseDate: 2017,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/459220/ss_475f22347933e767b7ff40c373712c437e86abd3.600x338.jpg?t=1577832383",
    genre: ["Strategy", "RTS", "Multiplayer", "Base Building", "Sci-fi"],
    description:
      "Halo Wars: Definitive Edition is an enhanced version of the real-time strategy classic, Halo Wars, updated to run natively on PC. Halo Wars: Definitive Edition includes improved graphics, new achievements and all of the DLC created for the landmark real-time strategy game. ",
  },
  {
    title: "Terraformers",
    developer: "Asteroid Lab",
    releaseDate: 2022,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/1244800/ss_00bac845f47c9ff604cb4e22493234304faae640.116x65.jpg?t=1658304146",
    genre: ["City Builder", "Base Building", "Base Building"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "SuperHot Vr",
    developer: "SUPERHOT Team",
    releaseDate: 2017,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/617830/ss_4b3a840f1b1865066a1723c9b1a35d20af487f1d.1920x1080.jpg?t=1646818932",
    genre: ["VR", "Shooter", "Bullet Time", "Puzzle", "FPS", "Sci-fi"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1641577012",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1641577012",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1641577012",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1641577012",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg?t=1641577012",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
  },
  {
    title: "Half-Life Alyx",
    developer: "Valve",
    releaseDate: 2020,
    picture:
      "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival. ",
    genre: ["VR", "Shooter", "Horror", "FPS", "Sci-fi", "Action"],
    description:
      "Terraformers is an expansive colony builder and resource management game with roguelike elements. Explore the Red Planet, develop spectacular cities, spread life and terraform the planet with ambitious projects.",
    videoLink: "http:www.youtube.com/frzeljmfnezmlkfjezkm",
  },
];

//Variable de tri. Si elle est null, aucun tri n'est fait.
let selectedGenre = null;

//Création de la liste unique des genres
let listGenre = [];
COLLECTION.forEach((game) => {
  game.genre.forEach((genre) => {
    if (!listGenre.includes(genre)) listGenre.push(genre);
  });
});
//Insertion des genres uniques dans le document
let genreNavElt = document.querySelector("#genreList");
genreNavElt.innerHTML = listGenre
  .sort()
  .map((genre) => {
    return `<li class="badgesList__item"><a class="badgesList--badge" href="index.html?genre=${genre}">${genre}</a></li>`;
  })
  .join("");

//Rendu initial
gameListRender(COLLECTION, selectedGenre);

//
// Fonctions
//

//Affiche la liste des jeux d'une collection en fonction de son genre
function gameListRender(collection, selectedGenre) {
  //Sélection de l'élément contenant les cards de jeux
  let listCardsElt = document.querySelector("#cardsList");

  //Parcours de la liste des jeux
  listCardsElt.innerHTML = collection
    //Si selectedGenre est utilisé, on filtre la collection
    .filter((games) =>
      selectedGenre != null ? games.genre.includes(selectedGenre) : true
    )
    //Parcours de la liste avec affichage
    .map(
      (game) =>
        `
          <article class="cardsList__card">
            <img class="cardsList__card__img" src="${game.picture}" alt="#" />
            <ul class="cardsList__card__genreList badgesList">
              ${game.genre
                //.slice(0, 5)    //Possibilité de limiter la quantité de genre de jeu à afficher
                .map(
                  (genre) =>
                    `<li class="badgesList__item"><a class="badgesList--badge" href="#">${genre}</a></li>`
                )
                .join("")}
            </ul>
            <section class="cardsList__card__content">
            <h2 class="cardsList__card__title">${game.title}</h2>
            <div class="cardsList__card__titleDescription">
              <h3 class="cardsList__card__developper">${game.developer}</h3>
              <time>${game.releaseDate}</time>
            </div>
            <p class="cardsList__card__description">${game.description}</p>
            <nav class="cardsList__card__socialLink">
              <a href="#">
                <img src="./assets/img/youtube.svg" alt="youtube link" />
              </a>
              <a href="#">
                <img src="./assets/img/twitter.svg" alt="twitter link" />
              </a>
              <a href="#">
                <img src="./assets/img/steamLogo.svg" alt="steamLogo link" />
              </a>
            </nav>
            </section>
          </article>
        `
    )
    .join("");
  //Fin de map

  //Ajout d'un event à chaque genre

  let genresElt = document.querySelectorAll(".badgesList--badge"); //Selection du container
  genresElt.forEach((genre) => {
    //ajout d'un event sur tous les genres
    genre.addEventListener("click", function (e) {
      e.preventDefault(); //Annulation de l'action par defaut
      selectedGenre = genre.innerHTML; //Récupération du nom du genre
      gameListRender(COLLECTION, selectedGenre); //Mise à jour du rendu de la liste avec le genre sélectionné
    });
  });
}
