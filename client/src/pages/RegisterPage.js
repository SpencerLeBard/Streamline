import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password, name }),
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       console.log('Registration successful');
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (err) {
  //     setError('An error occurred. Please try again.');
  //   }
  // };
  // Temporary mock registration for frontend-only deployment
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration successful');
  };

  return (
    <div>
      <h2>Register</h2>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage; 