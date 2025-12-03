import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('#form');
const input = document.querySelector('#input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
 showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query.',
          position: 'topRight',
        });
        return;
      }
      
      createGallery(data.hits);
    })
    .catch(err => {
      console.error('Error fetching images:', err);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
    form.reset();
});