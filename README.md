<img width="1440" alt="Schermafbeelding 2023-02-21 om 10 02 22" src="https://user-images.githubusercontent.com/89298385/220298039-a23410cc-24ca-4806-9483-3349eedab0d0.png">

# Dynamische Squadpagina 
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Deze squadpage biedt een overzicht van alle studenten en squads van de opleiding Frontend Design & Development van het cohort 2022. 
Binnen de pagina kan de gebruiker linken naar de website van studenten per squad. Bonus: de gebruike kan een drankje uitkiezen die het apparaat laat maken. 

[Bekijk de squadpage](https://blue-proud-hare.cyclic.app/)

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
### HTML
De opmaak van de website is nu dynamisch opgemaakt dankzij de Javascript template EJS (Embedded Javascript).
Deze tool laadt de html in vanuit onafhankelijke ejs-bestanden en zet het totaal om in html dat uiteindelijk te zien is in de browser.

Dit is het index.ejs bestand 
```ejs
<%- include('./partials/head.ejs') %>

<body>
    <%- include('./partials/nav.ejs') %>
<main>
    <section>
        <%- include('./partials/page-title.ejs') %>

        <%- include('./partials/coffee-machine.ejs') %>
    </section>
    <section>
        <%- include('./partials/squad-members.ejs') %>
    </section>
</main>

<%- include('./partials/foot.ejs') %>
```

### CSS
CSS is gebruikt om de layout, animaties en identiteit van de site te regelen. Omdat CSS een client-side taal is het te vinden in de map `./public`. 
In dit bestand is gebruik gemaakt van `custom-properties`:

```css
:root {
    /* Animations */
    --a-quick: 0.2s;
    --a-default: 0.3s;
    --a-medium: 0.6s;

    /* Colors */
    --c-default: #fafafa;
    --c-invert: #121212;
    --c-primary-0: #f0f2f4;
    --c-primary-25: #9bb3df;
    --c-primary-50: #647fb3;
    --c-primary-75: #294d90;
    --c-primary-100: #2e3f5f;
    --c-secundary-0: #e17878;
    --c-secundary-50: #bf3c3c;
    --c-secundary-100: #8b5a5a;
    --c-tertiary-50: #7d593b;
    --c-tea: #e7e2596a;
    --c-water: #82c0db;

    /* Layout */
    --w-dix: 10vw;
    --w-quarter: 25vw;
    --w-third: 33vw;
    --w-half: 50vw;
    --w-full: 100vw;
    --h-full: 100vh;

    /* Units */
    --u-nano: 0.1em;
    --u-micro: 0.25em;
    --u-small: 0.375em;
    --u-medium: 0.5em;
    --u-default: 1em;
    --u-large: 2em;
    --u-round: 50%;
}
```


### Javascript
Javascript is net als de css te vinden in de `./public` map. 
Deze Javascript is ook client-side en bevat voornamelijk de instellingen voor de animatie van het koffiezetapparaat.

Hieronder staan de instellingen die de geluidseffecten inlaad.

```js
const coffeeAudio = [
	new Audio('https://nichtrijder.pepijnblom.com/sounds/krijg%20nou%20een%20bakkie%20pleur.mp3'),
	new Audio('./assets/audio/de-eerste-indruk-is-romig.mp3')
];
const teaAudio = new Audio('./assets/audio/cup-of-tea.m4a')
const waterAudio = new Audio('./assets/audio/water.m4a')

const liquid = document.querySelector('.liquid')
const dispenser = ['.left-dispenser-output', '.right-dispenser-output']
```

### Node
Node (officieel NodeJS ) organiseert de Javascript op de server. Het biedt de mogelijkheid om te communiceren tussen de API mijn website d.m.v HTTP request en responses.

Hieronder staat een voorbeeld hoe de squads worden opgehaald uit de API.

```js
	// Haalt alle squads op uit de API en wacht voordat voorgaande commando's zijn uitgevoerd
	await getSquads()
		.then((response) => squads = response)

	// Filter uit de squads
	squads = squads.filter((item) => item.slug.startsWith('squa'))

	if (!id) id = squads[2].id
	if (!direction) direction = 'ASC'
	await getSquad({ id, orderBy: 'surname', direction })
		.then((response) => squad = response)

	response.render('index', { squads, squad, members: squad.members })
})
```


### Express
Express is het framework dat de routing regelt waar de data vandaan kan worden gehaald.

Hieronder staat een voorbeeld hoe express wordt geïmporteerd in node uit de node_modules mappenstructuur:

```js
import express from 'express'

[...]

// Creëert een nieuwe express app
const app = express()

// Configureert hoe ik Express kan gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
```

## Installatie
<!-- Bij Installatie staat stap-voor-stap beschreven hoe je de development omgeving moet inrichten om aan de repository te kunnen werken. -->
Voor dit project heb ik Node geinstalleerd en met behulp van de terminal binnen Visual Studio Code geactiveerd met het commando `npm init`. Zo wordt de node omgeving geïnitialiseerd. Zodra dat gelukt is kan `npm install` worden uitgevoerd. Tot slot wanneer er aanpassen zijn gemaakt op nieuwe regels code zijn gemaakt kan met behulp van `npm start` het resultaat worden weergegeven in de browser. Wanneer de server gesloten moet worden, of opnieuw worden opgestart, kan met de sneltoets `control + c / ^c` op mac.

## Gebruik
N.v.t.

## Bronnen
[docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

https://foolishdeveloper.com/how-to-play-sound-on-click-using-javascript/

https://internetgekki.es/

https://nichtrijder.pepijnblom.com/

## Licentie
![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
