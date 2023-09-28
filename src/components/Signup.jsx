import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more validation)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Send a POST request to your registration API with user credentials
      const response = await fetch('YOUR_REGISTRATION_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, you can redirect the user or perform other actions
        console.log('Registration successful');
        // Reset form fields and errors
        setEmail('');
        setPassword('');
        setError(null);
      } else {
        // Registration failed
        const data = await response.json();
        setError(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;