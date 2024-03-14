const parkingSpots = document.querySelectorAll('.parking-spot');

parkingSpots.forEach(spot => {
  const spotId = spot.id;
  const isRed = localStorage.getItem(spotId) === 'red';
  spot.style.backgroundColor = isRed ? 'red' : 'green';
});

parkingSpots.forEach(spot => {
  let isClicked = spot.style.backgroundColor === 'red';

  spot.addEventListener('click', () => {
    spot.style.backgroundColor = isClicked ? 'green' : 'red';
    isClicked = !isClicked; 

    const spotId = spot.id;
    const color = isClicked ? 'red' : 'green';
    localStorage.setItem(spotId, color);

    if (spot.style.backgroundColor === 'red') {
      const modalOverlay = document.createElement('div');
      modalOverlay.classList.add('modal-overlay');

      spot.appendChild(modalOverlay);
    } else {
      const modalOverlay = spot.querySelector('.modal-overlay');
      if (modalOverlay) {
        spot.removeChild(modalOverlay);
      }
    }
  });
});
