import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    // handle form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="name" style={{ marginBottom: '0.5rem' }}>Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

      <label htmlFor="age" style={{ marginBottom: '0.5rem' }}>Age:</label>
      <input type="text" id="age" name="age" value={age} onChange={(event) => setAge(event.target.value)} required />

      <label htmlFor="email" style={{ marginBottom: '0.5rem' }}>Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

      <label htmlFor="password" style={{ marginBottom: '0.5rem' }}>Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

      <label htmlFor="confirmPassword" style={{ marginBottom: '0.5rem' }}>Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />

      <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}

export default Form;
