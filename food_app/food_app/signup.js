// Function to handle form submission for signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  // Here, you can add your signup logic, like sending a request to the server to create a new user
  // For this example, let's just log the input values to the console
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Email:', email);

  // Redirect to login page after signup (replace 'login.html' with the actual login page URL)
  window.location.href = 'login.html';
});
