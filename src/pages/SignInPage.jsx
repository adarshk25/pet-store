import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaGoogle } from 'react-icons/fa';  // Google Icon from react-icons
import { FiPhone } from 'react-icons/fi';  // Phone Icon from react-icons
import './SignInPage.css';

function SignInPage() {
  const { logIn } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    logIn({ email, role: isSeller ? 'seller' : 'customer' });
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google Sign-In
    console.log("Google Sign-In");
  };

  const handleMobileSignIn = () => {
    // Placeholder for Mobile Number Sign-In
    console.log("Mobile Number Sign-In");
  };

  return (
    <div className="signin-page">
      <div className="form-container">
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

          {/* Toggle Switch for Role (Customer/Seller) */}
          <div className="role-toggle">
            <label className={`switch ${isSeller ? 'seller' : ''}`}>
              <input
                type="checkbox"
                checked={isSeller}
                onChange={() => setIsSeller(!isSeller)} // Toggle between Customer and Seller
              />
              <span className="slider"></span>
            </label>
            <span className="role-text">{isSeller ? 'Seller' : 'Customer'}</span>
          </div>

          <button type="submit">Sign In</button>
        </form>

        {/* Social Sign-In Buttons */}
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <FaGoogle className="social-icon" />
            Sign In with Google
          </button>
          <button className="mobile-btn" onClick={handleMobileSignIn}>
            <FiPhone className="social-icon" />
            Sign In with Mobile Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
