module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Attempting registration with:', req.body);
  const { email, password, name } = req.body;
  
  if (email && password && name) {
    console.log('Registration successful for user:', email);
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        id: '1',
        email: email,
        name: name
      }
    });
  } else {
    console.log('Registration failed. Missing required fields.');
    res.status(400).json({
      success: false,
      message: 'Email, password, and name are required'
    });
  }
}; 