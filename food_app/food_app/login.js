// Function to handle form submission for login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Construct the data object to send in the request
  const data = {
    username: username,
    password: password
  };

  // Make an AJAX request to the server to validate the credentials
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://your-server.com/login', true); // Replace with your server endpoint
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Authentication successful, parse the response
      const response = JSON.parse(xhr.responseText);
      const userId = response.userId; // Assuming the server returns the user ID upon successful login

      // Store the user ID in localStorage
      localStorage.setItem('userId', userId);

      // Redirect to home page after login (replace 'index.html' with the actual home page URL)
      window.location.href = 'food_app.html';
    } else {
      // Authentication failed, display an error message
      console.error('Authentication failed:', xhr.statusText);
      // You can display an error message to the user here
    }
  };
  xhr.onerror = function() {
    console.error('Request failed');
    // You can display an error message to the user here
  };
  xhr.send(JSON.stringify(data));
});
