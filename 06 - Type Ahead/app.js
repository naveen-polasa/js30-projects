const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function fetchCities(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = fetchCities(this.value, cities);

  const html = matchArray
    .map((item) => {
      if (this.value) {
        const regex = new RegExp(this.value, "gi");
        const cityName = item.city.replace(
          regex,
          `<span class='h1'> ${this.value} </span>`
        );
        const stateName = item.state.replace(
          regex,
          `<span class='h1'> ${this.value} </span>`
        );
        const population = item.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `<li><span class='name'> ${item.city}, ${item.state} </span> <span class='population'>${population} </span> </li>`;
      }
    })
    .join("");
  suggestions.innerHTML = html;
}

const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);
