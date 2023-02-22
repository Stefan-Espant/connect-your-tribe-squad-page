import express from 'express'

const url = 'https://whois.fdnd.nl/api/v1/'

// Creates a new Express app
const app = express()

// Configure how I use Express
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Makes a route for the index
app.get('/', async (request, response) => {
	let { id } = request.query

	let squads
	let squad

	/* Get all squads */
	await getSquads()
		.then((response) => squads = response)

	/* Filter out the squads */
	squads = squads.filter((item) => item.slug.startsWith('squa'))

	if (!id) id = squads[1].id
	await getSquad({ id, orderBy: 'surname' })
		.then((response) => squad = response)

	response.render('index', { squads, squad, members: squad.members })
})

// Configure what port number express will listen on
app.set('port', process.env.PORT || 8000)

// Launches Express & receives the configured port number
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

// Fetch the JSON data after it has been approved

/**
 * Default get function
 * @param {*} endpoint path of the endpoint
 * @param {*} queryParams filter values
 * @returns Fetch with parsed JSON Data
 */
async function fetchJson(endpoint, queryParams) {
	let queryParamsString = ''
	if (queryParams) queryParamsString = new URLSearchParams(queryParams).toString()

	return await fetch(`${ url }/${ endpoint }?${ queryParamsString }`)
		.then((response) => response.json())
		.catch((error) => error)
}

/**
 * Get function to get all squads.
 * @param {*} queryParams filter values
 * @returns Array with squads
 */
function getSquads() {
	const endpoint = 'squads'
	return fetchJson(endpoint)
		.then((response) => response.squads)
		.catch(() => undefined)
}

/**
 * Get function to get a single squad with members.
 * @param {*} queryParams filter values
 * @returns Single squad
 */
function getSquad(queryParams) {
	const endpoint = 'squad'
	return fetchJson(endpoint, queryParams)
		.then((response) => response.squad)
		.catch(() => undefined)
}

// Filteren van studenten op basis van voorkeur
const drinks = ['coffee','tea','water']