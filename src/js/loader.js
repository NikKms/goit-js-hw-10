import Notiflix from 'notiflix';
const { Notify } = Notiflix;

export function showLoader() {
  Notify.init({
    useGoogleFont: false,
    fontFamily: 'Quicksand',
  });
  Notify.info('Loading...', {
    cssAnimationDuration: 0,
    clickToClose: false,
    timeout: false,
    position: 'center',
    backgroundColor: 'transparent',
    cssAnimation: {
      in: 'fadeIn',
      out: 'fadeOut',
    },
    svgSize: '50px',
    svgColor: '#4a4a4a',
    distance: '50px',
    fontSize: '24px',
  });
}
