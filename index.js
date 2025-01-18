document.addEventListener('DOMContentLoaded', (event) => {
  const headerContent = document.getElementById('headerContent');
  const menuButton = document.getElementById('menuButton');
  const menuButtonPath = menuButton.querySelector('path');

  menuButton.addEventListener('click', () => {
    if (headerContent.classList.contains('visible')) {
      headerContent.classList.remove('visible');
      menuButtonPath.setAttribute('d', 'M4 8L12 16L20 8'); // Arrow pointing down
    } else {
      headerContent.classList.add('visible');
      menuButtonPath.setAttribute('d', 'M4 16L12 8L20 16'); // Arrow pointing up
    }
  });
});