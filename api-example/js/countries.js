const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country)
    // }
    // console.log(countries)
    countries.forEach(country => {
        // console.log(country.cca2);

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCuontryDetailes('${country.cca2}')"> Details </button>
        `;
        countriesContainer.appendChild(countryDiv)
    });

}

const loadCuontryDetailes = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCuontryDetailes(data[0]))
}

const displayCuontryDetailes = country => {
    console.log(country)
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
    <img src="${country.flags.png}">
<h3> Name: ${country.name.common}</h3>
    `
}

loadCountries();