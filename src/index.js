import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import {
  renderCountryDetails,
  renderCountryList,
  clearCountryList,
} from './js/render';
import refs from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(event) {
  const searchQuery = event.target.value.trim().toLowerCase();

  if (!searchQuery) return clearCountryList();

  fetchCountries(searchQuery)
    .then(countries => {
      if (countries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }

      clearCountryList();

      if (countries.length === 1) renderCountryDetails(countries);
      else if (countries.length >= 2) renderCountryList(countries);
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}
