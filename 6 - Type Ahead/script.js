const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const temp = fetch(endpoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data));
function match_cities(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function display() {
  const arr = match_cities(this.value, cities);
  const new_arr = arr
    .map((place) => {
      const cityName = `${place.city.replace(
        new RegExp(this.value, "gi"),
        `<span class='hl'>${this.value}</span>`
      )}`;
      const stateName = `${place.state.replace(
        new RegExp(this.value, "gi"),
        `<span class='hl'>${this.value}</span>`
      )}`;
      const element = `<li><span class='name'>${cityName},${stateName}</span><span class='population'>${place.population}</span></li>`;
      return element;
    })
    .join("");
  suggestion.innerHTML = new_arr;
}
const input = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");
input.addEventListener("change", display);
input.addEventListener("keyup", display);
