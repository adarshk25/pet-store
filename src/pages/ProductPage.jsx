// src/pages/ProductPage.jsx
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Golden Retriever', category: 'Pets', price: '$1000', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Siamese Cat', category: 'Pets', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Dog Food', category: 'Food', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Cat Food', category: 'Food', price: '$15', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Flea Medicine', category: 'Medicine', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Heartworm Medicine', category: 'Medicine', price: '$25', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Pet Shampoo', category: 'Accessories', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Dog Collar', category: 'Accessories', price: '$8', image: 'https://via.placeholder.com/150' },
  // Add more products as needed...
];

function ProductPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <p>Explore a variety of pets, food, medicine, and accessories.</p>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
