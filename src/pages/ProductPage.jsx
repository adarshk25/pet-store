import { useState } from 'react'; // Importing useState to manage the filter state
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Golden Retriever', category: 'Pets', price: '$1000', image: 'https://www.petfinder.com/wp-content/uploads/2017/04/golden-retriever.jpg' },
  { id: 2, name: 'Siamese Cat', category: 'Pets', price: '$500', image: 'https://www.petfinder.com/wp-content/uploads/2018/07/siamese-cat.jpg' },
  { id: 3, name: 'Dog Food', category: 'Food', price: '$20', image: 'https://m.media-amazon.com/images/I/91+GSrI7drL._AC_SL1500_.jpg' },
  { id: 4, name: 'Cat Food', category: 'Food', price: '$15', image: 'https://m.media-amazon.com/images/I/91Ml1gwmU0L._AC_SL1500_.jpg' },
  { id: 5, name: 'Flea Medicine', category: 'Medicine', price: '$30', image: 'https://www.chewy.com/petmedia/image/upload/f_auto,q_auto,dpr_auto,w_800,h_800,c_limit/mcgXq0hpxNzVp5Zs79FYgFqSzqZZgdLRu-AYKkFSnm0Wnse_6fLPgyWp19dL1nRj39A.jpg' },
  { id: 6, name: 'Heartworm Medicine', category: 'Medicine', price: '$25', image: 'https://www.heartwormsociety.org/images/default-source/shelter/heartworm-pill.jpg' },
  { id: 7, name: 'Pet Shampoo', category: 'Accessories', price: '$10', image: 'https://www.walmart.com/contents/assets/images/83ed4c9c-7292-48f4-8696-95126cd1a2d1.jpg' },
  { id: 8, name: 'Dog Collar', category: 'Accessories', price: '$8', image: 'https://www.chewy.com/petmedia/image/upload/f_auto,q_auto,dpr_auto,w_800,h_800,c_limit/4c8963f7d8a241ac847b8b5488c94fe1.jpeg' },
  { id: 9, name: 'Labrador Retriever', category: 'Pets', price: '$900', image: 'https://www.petfinder.com/wp-content/uploads/2017/04/labrador-retriever.jpg' },
  { id: 10, name: 'Persian Cat', category: 'Pets', price: '$600', image: 'https://www.petfinder.com/wp-content/uploads/2019/04/persian-cat.jpg' },
  { id: 11, name: 'Bird Food', category: 'Food', price: '$10', image: 'https://m.media-amazon.com/images/I/81+vD6ndA6L._AC_SL1500_.jpg' },
  { id: 12, name: 'Fish Food', category: 'Food', price: '$5', image: 'https://m.media-amazon.com/images/I/71rxr1nHV3L._AC_SL1500_.jpg' },
  { id: 13, name: 'Ear Cleaner for Dogs', category: 'Medicine', price: '$15', image: 'https://m.media-amazon.com/images/I/81oxmj5unAL._AC_SL1500_.jpg' },
  { id: 14, name: 'Joint Supplement for Dogs', category: 'Medicine', price: '$20', image: 'https://m.media-amazon.com/images/I/61U+kB7InxL._AC_SL1500_.jpg' },
  { id: 15, name: 'Pet Towel', category: 'Accessories', price: '$12', image: 'https://www.walmart.com/contents/assets/images/30c63a58-0c68-47e0-8045-309283bdcb89.jpg' },
  { id: 16, name: 'Pet Brush', category: 'Accessories', price: '$8', image: 'https://www.walmart.com/contents/assets/images/4f7d3f87-0636-467f-91b4-55c5a53830ff.jpg' },
  { id: 17, name: 'Cocker Spaniel', category: 'Pets', price: '$700', image: 'https://www.petfinder.com/wp-content/uploads/2020/02/cocker-spaniel.jpg' },
  { id: 18, name: 'British Shorthair', category: 'Pets', price: '$400', image: 'https://www.petfinder.com/wp-content/uploads/2020/06/british-shorthair.jpg' },
  { id: 19, name: 'Hamster Food', category: 'Food', price: '$8', image: 'https://m.media-amazon.com/images/I/91IqlWrYxuL._AC_SL1500_.jpg' },
  { id: 20, name: 'Rabbit Food', category: 'Food', price: '$12', image: 'https://m.media-amazon.com/images/I/91Kn7fmd9pL._AC_SL1500_.jpg' },
  { id: 21, name: 'Heartworm Prevention Chew', category: 'Medicine', price: '$35', image: 'https://www.chewy.com/petmedia/image/upload/f_auto,q_auto,dpr_auto,w_800,h_800,c_limit/503e2e40ec534cbb9b99e31421c9a9b0.jpg' },
  { id: 22, name: 'Pet Nail Clippers', category: 'Accessories', price: '$10', image: 'https://www.walmart.com/contents/assets/images/c8c4e4ac-87b4-429f-8ec4-539eea16e19b.jpg' },
  { id: 23, name: 'Beagle', category: 'Pets', price: '$800', image: 'https://www.petfinder.com/wp-content/uploads/2017/04/beagle.jpg' },
  { id: 24, name: 'Bulldog', category: 'Pets', price: '$950', image: 'https://www.petfinder.com/wp-content/uploads/2017/06/bulldog.jpg' },
  { id: 25, name: 'Organic Dog Food', category: 'Food', price: '$22', image: 'https://m.media-amazon.com/images/I/91bb1-MuLKL._AC_SL1500_.jpg' },
  { id: 26, name: 'Dog Treats', category: 'Food', price: '$10', image: 'https://m.media-amazon.com/images/I/61w-zfbnmtL._AC_SL1500_.jpg' },
  { id: 27, name: 'Pet Diapers', category: 'Accessories', price: '$20', image: 'https://www.walmart.com/contents/assets/images/00dfd173-2fa9-418b-a87e-69a4f9309e59.jpg' },
  { id: 28, name: 'Golden Retriever Puppy', category: 'Pets', price: '$1200', image: 'https://www.petfinder.com/wp-content/uploads/2021/05/golden-retriever-puppy.jpg' },
  { id: 29, name: 'Yorkshire Terrier', category: 'Pets', price: '$750', image: 'https://www.petfinder.com/wp-content/uploads/2019/12/yorkshire-terrier.jpg' },
  { id: 30, name: 'Dog Bowl', category: 'Accessories', price: '$18', image: 'https://www.walmart.com/contents/assets/images/5b15a0c1-4515-4e52-98b0-65fcf54fcf8c.jpg' },
  // Add more products as needed...
];

function ProductPage() {
  const { addToCart } = useCart();

  // State to store the selected filter category
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Filter products based on selected category
  const filteredProducts = categoryFilter === 'All' 
    ? products 
    : products.filter(product => product.category === categoryFilter);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleFilterChange = (category) => {
    setCategoryFilter(category); // Update the filter state
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      {/* Filter Options */}
      <div className="filter-options">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Pets')}>Pets</button>
        <button onClick={() => handleFilterChange('Food')}>Food</button>
        <button onClick={() => handleFilterChange('Medicine')}>Medicine</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
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
