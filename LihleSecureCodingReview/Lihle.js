document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
      registerForm.addEventListener('submit', handleRegister);
  }

  if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
  }

  function handleRegister(event) { 
      event.preventDefault(); /* form submissions 2*/
      const username = document.getElementById('username').value;   
      const password = document.getElementById('password').value;

      /* User data is stored in localStorage after registration 1*/
      if (validateInput(username, password)) {
          localStorage.setItem('user', JSON.stringify({ username, password: hashPassword(password) }));
          alert('Registration successful!');
          window.location.href = 'Lihle.html';
      } else {
          alert('Invalid input!');
      }
  }
  /* Server-Side Storage */

 
  function handleLogin(event) { 
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const storedUser = JSON.parse(localStorage.getItem('user'));
     
      if (storedUser && storedUser.username === username && storedUser.password === hashPassword(password)) {
          alert('Login successful!');
          window.location.href = 'LihleFrontP.html';
      } else {
          alert('Invalid username or password!');
      }
  }

  /* basic error messages 4 */


/* 
Detailed Logging*/

  function validateInput(username, password) {
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      return usernameRegex.test(username) && password.length >= 6;
  }

  /*3 check if username contains only alphanumeric characters 
   & if password length is at least 6 characters.
.*/

 /*Enhanced Validation. 3*/

  function hashPassword(password) { 
      return btoa(password);
      /*encodes password btoa || password hashing || 5
      */

    
  }
}); 

