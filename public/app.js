document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  try {
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('User registered successfully');
    } else {
      const error = await response.json();
      alert(`Error registering user: ${error.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error occurred while registering user');
  }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login successful');
      console.log('Token:', data.token);
      localStorage.setItem('token', data.token);
    } else {
      const error = await response.json();
      alert(`Invalid credentials: ${error.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error occurred while logging in');
  }
});
