// src/pages/SignInPage.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './SignInPage.css';

function SignInPage() {
  const { logIn } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can replace this with real authentication logic
    logIn({ email });
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
