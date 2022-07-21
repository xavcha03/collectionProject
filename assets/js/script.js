const collection = [
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
  },
];

let selectedGenre = null;

let listCardsElt = document.querySelector("#cardsList");
listCardsElt.innerHTML = collection
  .filter((games) =>
    selectedGenre != null ? games.genre.includes(selectedGenre) : true
  )
  .map(
    (game) =>
      `<article class="cardsList__card">
    <img class="cardsList__card__img" src="${game.picture}" alt="#" />
    <ul class="cardsList__card__genreList badgesList">
        ${game.genre
          //.slice(0, 5)
          .map(
            (genre) =>
              `<li class="badgesList__item"><a href="#">${genre}</a></li>`
          )
          .join("")}
    </ul>
    <h2 class="cardsList__card__title">${game.title}</h2>
    <div>
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
  </article>
    `
  )
  .join("");

//Ajout d'un event à chaque genre
let genresElt = document.querySelectorAll(".cardsList__card__genreList a");
genresElt.forEach((genre) => {
  genre.addEventListener("click", function (e) {
    e.preventDefault();
    selectedGenre = genre.innerHTML;
  });
});
