import express, { response } from 'express'

const url = 'https://whois.fdnd.nl/api/v1/squad/'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  console.log(request.query.squad)

  let slug = request.query.squad || 'squat-c-2022'
  let orderBy = request.query.orderBy || 'surname'
  let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((data) => {
    response.render('index', data)
  })
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }