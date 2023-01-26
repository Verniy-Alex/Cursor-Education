const BASE_URL = 'https://swapi.dev/api';

const actorsContainer = document.querySelector('.actors-container')
const planetsContainer = document.querySelector('.planets-container')
actorsContainer.style.display = 'none'
planetsContainer.style.display = 'none'


const actorPageBtn = document.querySelector('#actorsPage')
const planetPageBtn = document.querySelector('#planetsPage')

actorPageBtn.addEventListener('click', function () {
    planetsContainer.style.display = 'none'
    actorsContainer.style.display = 'block'
})
planetPageBtn.addEventListener('click', function () {
    planetsContainer.style.display = 'block'
    actorsContainer.style.display = 'none'
})

const container = document.querySelector('.container')
const button = document.querySelector('.button')
const input = document.querySelector('.input')
const searchInfo = document.querySelector('.search-subinfo')
const planetBox = document.querySelector('.planet-box')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

// container.style.visibility = 'hidden'
// container.style.display = 'none'

// Функція доступу до URL акторів
async function getActorsInfo() {
    const request = await fetch(`${BASE_URL}/films/1`)
    const info = await request.json()

    const characters = info.characters
    characters.forEach((character) => {
        getActors(character)
    });
}
getActorsInfo()

// Функція рендерінгу акторів
async function getActors(character) {
    const requestActor = await fetch(character)
    const actors = await requestActor.json()

    const actorBlock = document.createElement('div')
    actorBlock.classList.add('actor-block')
    const actorInfo = `
    <h2 class="actor-name"> ${actors.name}</h2>
    <p> Вік: ${actors.birth_year}</p>
    <p> Стать: ${actors.gender}</p>
    `

    actorBlock.innerHTML = actorInfo
    container.append(actorBlock)

}
getActors()

// Отримання фільму через Input
let inputValue = ''
input.addEventListener('input', (e) => { // доступ до інпута
    inputValue = e.target.value
})

async function getMovieInfo() {
    const requestMovie = await fetch(`${BASE_URL}/films/${inputValue}`)
    const movieInfo = await requestMovie.json()

    input.classList.add('movie-input')
    searchInfo.innerHTML = `<span>Сюжет: ${movieInfo.opening_crawl}</span>`
    const allActors = await movieInfo.characters
    if (inputValue === '') {
        searchInfo.innerHTML = `<span>Виберіть фільм з 1 по 6 частини</span>`
    } else {
        searchInfo.innerHTML = `<span>Сюжет: ${movieInfo.opening_crawl}</span>`
    }
    if (inputValue > 6) {
        alert('Виберіть фільм з 1 по 6 частину')
    }
    await allActors.forEach(getActorsInfo());
}
button.addEventListener('click', () => {
    // container.style.visibility = 'visible'
    // container.style.display = 'block'
    container.innerHTML = ''
    getMovieInfo()
})

// Планети



function addPlanetsInfo(planet) {
    const planetsWrapper = document.createElement('div')
    planetsWrapper.classList.add('planet-wrapper')
    const planets = `
        <h1>Ім'я: ${planet.name}</h1>
        <p>Населення: ${planet.population} </p>
        <p>Діаметр: ${planet.diameter} </p>
    `

    planetsWrapper.innerHTML += planets
    planetBox.append(planetsWrapper)
}

let page = 1
async function getPlanets() {
    const request = await fetch(`${BASE_URL}/planets/?page=${page}`)
    const data = await request.json()

    const arrPlanets = data.results
    await arrPlanets.forEach((planet) => {
        addPlanetsInfo(planet)
    })
}
getPlanets()

btnNext.addEventListener('click', function () {
    if (page == 6) {
        page = 1
    } else {
        page++
    }
    planetBox.innerHTML = ''
    getPlanets(page)
})
btnPrev.addEventListener('click', function () {
    if (page == 1) {
        page = 6
    } else {
        page--
    }
    planetBox.innerHTML = ''
    getPlanets(page)
})
