import refs from './refs';

function renderCountryDetails([country]) {
  const { flags, name, capital, population, languages } = country;
  const langString = Object.values(languages).join(', ');

  refs.countryInfo.insertAdjacentHTML(
    'beforeend',
    `<div style="background-color: #fff; border: 1px solid #ccc; border-radius: 5px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); margin-bottom: 20px; overflow: hidden; padding: 20px;">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div style="border: 1px solid #ccc; border-radius: 50%; overflow: hidden;">
          <img src="${flags.svg}" alt="flag" width="150" height="150">
        </div>
        <div>
          <h2 style="font-size: 28px; margin: 0;">${name.official}</h2>
          <p style="font-size: 18px; margin: 10px 0 0;">Capital: <span style="font-weight: bold;">${capital}</span></p>
          <p style="font-size: 18px; margin: 10px 0 0;">Population: <span style="font-weight: bold;">${population}</span></p>
          <p style="font-size: 18px; margin: 10px 0 0;">Languages: <span style="font-weight: bold;">${langString}</span></p>
        </div>
      </div>
    </div>`
  );
}

function renderCountryList(countries) {
  const items = countries
    .map(
      ({ flags, name }) =>
        `<li style="display: flex; align-items: center; gap: 10px; padding: 10px; transition: background-color 0.3s;"><img src="${flags.svg}" alt="flag" width="40" style="box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);"><p style="margin: 0;">${name.official}</p></li>`
    )
    .join('');

  refs.countryList.insertAdjacentHTML('beforeend', items);
}

export { renderCountryDetails, renderCountryList };
