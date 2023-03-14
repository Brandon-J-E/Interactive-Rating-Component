
const urlParams = new URLSearchParams(location.search);
const rating = urlParams.get('rating');

  window.addEventListener('DOMContentLoaded', function() {
    const ratingElement = document.getElementById('ratingElement').innerHTML = `You selected ${rating} out of 5.`;
    ratingElement.textContent = localStorage.getItem('ratingElement');
  });