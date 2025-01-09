// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cart, user, logOut } = useCart();

  return (
    <nav className="navbar">
      <h1>Pet Store</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
