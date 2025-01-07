document.addEventListener('DOMContentLoaded', (event) => {
  const headerCard = document.getElementById('headerCard');
  const menuButton = document.getElementById('menuButton');

  menuButton.addEventListener('click', () => {
    if (!headerCard.style.transform) {
      headerCard.style.transform = 'translateY(-78%)';
    }

    if (headerCard.style.transform === 'translateY(-78%)') {
      headerCard.style.transform = 'translateY(10%)';
      menuButton.innerText = 'Close menu';
    } else if (headerCard.style.transform === 'translateY(10%)') {
      headerCard.style.transform = 'translateY(-78%)';
      menuButton.innerText = 'Open menu';
    }
  });
});