import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <div className="welcome">
          <h1>Welcome to Pet Store</h1>
          <p>Your one-stop shop for pets, food, medicines, and all things pet-related!</p>
        </div>
        <div className="shop-now">
          <a href="/products" className="shop-btn">Shop Now</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
