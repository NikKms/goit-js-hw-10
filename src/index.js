import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryDetails, renderCountryList } from './js/render';
import refs from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(event) {
  const searchQuery = event.target.value.trim().toLowerCase();

  if (!searchQuery) {
    clear(refs.countryList);
    clear(refs.countryInfo);
    return;
  }

  fetchCountries(searchQuery)
    .then(countries => {
      if (countries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length >= 2 && countries.length <= 10) {
        clear(refs.countryList);
        renderCountryList(countries);
        clear(refs.countryInfo);
      } else {
        clear(refs.countryInfo);
        renderCountryDetails(countries);
        clear(refs.countryList);
      }
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}

function clear(el) {
  el.innerHTML = '';
}
