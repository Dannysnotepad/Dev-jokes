/*
*Devs joke
*from
*Dannysnotepad
*/

const jokeArea = document.getElementById('jokeArea')
const generate = document.getElementById('generate')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single'

let fetchJoke = () => {
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeArea.textContent = `${item.joke}`
  })
}
fetchJoke()

generate.addEventListener('click', () => {
  fetchJoke()
})