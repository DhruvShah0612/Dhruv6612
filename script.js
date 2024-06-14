document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (!username || !password) {
      document.querySelector('.error-message').style.display = 'block';
  } else {
      document.querySelector('.error-message').style.display = 'none';
      // Perform login action here
  }
});
