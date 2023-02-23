import express from "express";

// Haalt de API gegevens op uit de bovenste laag: de root.
const url = "https://whois.fdnd.nl/api/v1/";

// Creëert een nieuwe express app
const app = express();

// Configureert hoe ik Express kan gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maakt een route voor de index
<<<<<<< HEAD
app.get("/", async (request, response) => {
  let { id, direction } = request.query;
=======
app.get('/', async (request, response) => {
	let { id, direction, favoriteDrink } = request.query
>>>>>>> 46744aea778e12cc1cba812075a8691273563b06

  let squads;
  let squad;

  // Haalt alle squads op uit de API en wacht voordat voorgaande commando's zijn uitgevoerd
  await getSquads().then((response) => (squads = response));

  // Filter uit de squads
  squads = squads.filter((item) =>
    item.slug.startsWith("squa")
  );

<<<<<<< HEAD
  if (!id) id = squads[2].id;
  if (!direction) direction = "ASC";
  await getSquad({
    id,
    orderBy: "surname",
    direction,
  }).then((response) => (squad = response));

  response.render("index", {
    squads,
    squad,
    members: squad.members,
  });
});
=======
	if (!id) id = squads[2].id
	if (!direction) direction = 'ASC'
	await getSquad({ id, orderBy: 'surname', direction, favoriteDrink })
		.then((response) => squad = response)

	response.render('index', { squads, squad, members: squad.members, favoriteDrink })
})
>>>>>>> 46744aea778e12cc1cba812075a8691273563b06

// Configureert op welke poortnummer express naar luisteren zal
app.set("port", process.env.PORT || 8000);

// Lanceert Express & ontvangt de geconfigureerde poortnummer
app.listen(app.get("port"), function () {
  // Toont een bericht in de console en geef het poortnummer door
  console.log(
    `Application started on http://localhost:${app.get(
      "port"
    )}`
  );
});

// JSON gegevens ophalen nadat ze zijn goedgekeurd

/**
 * Standaard get functie
 * @param {*} endpoint pad van het eindpunt
 * @param {*} queryParams filter waardes
 * @returns Ophalen met geparseerde JSON-gegevens
 */
async function fetchJson(endpoint, queryParams) {
<<<<<<< HEAD
  let queryParamsString = "";
  if (queryParams)
    queryParamsString = new URLSearchParams(
      queryParams
    ).toString();
=======
	let queryParamsString = ''
	if (queryParams) {
		for (const property in queryParams) {
			if (typeof queryParams[property] === 'undefined') delete(queryParams[property])
		}
		queryParamsString = new URLSearchParams(queryParams).toString()
	}
>>>>>>> 46744aea778e12cc1cba812075a8691273563b06

  return await fetch(
    `${url}/${endpoint}?${queryParamsString}`
  )
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Krijg functie om alle squads te krijgen.
 * @param {*} queryParams filter waardes
 * @returns Array met squads
 */
function getSquads() {
  const endpoint = "squads";
  return fetchJson(endpoint)
    .then((response) => response.squads)
    .catch(() => undefined);
}

/**
 * Krijg functie met een enkele squad met members.
 * @param {*} queryParams filter waardes
 * @returns Enkele squad
 */
function getSquad(queryParams) {
  const endpoint = "squad";
  return fetchJson(endpoint, queryParams)
    .then((response) => response.squad)
    .catch(() => undefined);
}

// Filteren van studenten op basis van voorkeur
let drinks = ["coffee", "tea", "water"];
