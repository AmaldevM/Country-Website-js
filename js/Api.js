const loadCountryAPI = () =>{
  
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
const getCountry = (country) =>{
    console.log(country)
    return `
        <div class="country-div">
        <img src="${country.flags.png}">
        <h2>${country.name.common}</h2>
        </div>
    `
}
loadCountryAPI()