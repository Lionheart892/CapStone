import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more validation)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Send a POST request to your authentication API with user credentials
      const response = await fetch('YOUR_AUTH_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful, you can redirect the user or perform other actions
        console.log('Login successful');
        // Reset form fields and errors
        setEmail('');
        setPassword('');
        setError(null);
      } else {
        // Authentication failed
        const data = await response.json();
        setError(data.message || 'Authentication failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;