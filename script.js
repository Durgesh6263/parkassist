// Add this code to script.js

const parkingSpots = document.querySelectorAll('.parking-spot');

// Initialize the state of each spot based on local storage or default to green
parkingSpots.forEach(spot => {
  const spotId = spot.id;
  const isRed = localStorage.getItem(spotId) === 'red';
  spot.style.backgroundColor = isRed ? 'red' : 'green';
});

parkingSpots.forEach(spot => {
  // Flag to keep track of whether the spot is clicked and red
  let isClicked = spot.style.backgroundColor === 'red';

  spot.addEventListener('click', () => {
    // Toggle background color
    spot.style.backgroundColor = isClicked ? 'green' : 'red';
    isClicked = !isClicked; // Toggle the state

    // Store the state of the spot in local storage
    const spotId = spot.id;
    const color = isClicked ? 'red' : 'green';
    localStorage.setItem(spotId, color);

    // Create or remove modal overlay for entering vehicle number
    if (spot.style.backgroundColor === 'red') {
      const modalOverlay = document.createElement('div');
      modalOverlay.classList.add('modal-overlay');

      spot.appendChild(modalOverlay);
    } else {
      // Remove modal overlay if spot is unclicked
      const modalOverlay = spot.querySelector('.modal-overlay');
      if (modalOverlay) {
        spot.removeChild(modalOverlay);
      }
    }
  });
});
