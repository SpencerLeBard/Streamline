module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Attempting login with:', req.body);
  const { email, password } = req.body;
  
  // Check against hardcoded credentials (for demonstration)
  if (email === 'slebard@gmail.com' && password === 'spencer47') {
    console.log('Login successful for user:', email);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: '1',
        email: email,
        name: 'Spencer Lebard'
      },
      token: 'sample-jwt-token'
    });
  } else {
    console.log('Login failed. Invalid credentials:', email);
    res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }
}; 