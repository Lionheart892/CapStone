import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [sort, setSort] = useState('price-low-to-high'); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setProducts(data);
      })
      .catch((error) => {
        console.error('API request error:', error); 
      });
  }, [])
  
  const filteredAndSortedProducts = products
    .filter((product) => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sort === 'price-low-to-high') {
        return a.price - b.price;
      } else if (sort === 'price-high-to-low') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    
    <div>
      <div className="filter-sort-buttons">
        <button onClick={() => setFilter('all')}>All Products</button>
        <button onClick={() => setFilter('electronics')}>Electronics</button>
        <button onClick={() => setFilter('clothing')}>Clothing</button>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>

      <ul className="product-list">
      {filteredAndSortedProducts.map((product) => (
    <li key={product.id} className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}

export default ProductList;
