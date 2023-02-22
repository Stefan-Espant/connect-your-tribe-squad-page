import express, { response } from 'express'

const mainUrl = 'https://whois.fdnd.nl/api/v1/squads'
const url = 'https://whois.fdnd.nl/api/v1/squad/'

// Creates a new Express app
const app = express()

// Configure how I use Express
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Makes a route for the index
app.get('/', (request, response) => {
  console.log(request.query.squad)

  let slug = request.query.squad || 'squat-c-2022'
  let orderBy = request.query.orderBy || 'surname'
  let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((data) => {
    response.render('index', data)
  })
})

// Configure what port number express will listen on
app.set('port', process.env.PORT || 8000)

// Launches Express & receives the configured port number
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

// Fetch the JSON data after it has been approved
async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }

// Filteren van studenten op basis van voorkeur
const drinks = ['coffee','tea','water']