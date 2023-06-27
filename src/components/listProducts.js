import React, { useEffect, useState } from 'react';
import "../styles/registerStyles.css"
const ListOfProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/list');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    // Check if the user is logged in
    const isLoggedIn = true; // Replace with your actual login check

    if (isLoggedIn) {
      try {
        // Call the add to cart endpoint
        const response = await fetch(`http://localhost:8080/cart/add?productId=${productId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer <YOUR_AUTH_TOKEN>', // Replace with the actual auth token
          },
        });

        if (response.ok) {
          console.log(`Product with ID ${productId} added to cart`);
        } else {
          console.error('Error adding product to cart:', response.status);
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    } else {
      console.log('User not logged in');
      // Redirect to login page or show a login modal
    }
  };

  return (
    <div>
      <h4 className='text-center mb-2'>List of Products</h4>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (

        <div className='tables'>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Add to cart</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (

                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button id="this_but"
                      onClick={() => addToCart(product.id)}>
                      <i class="fas fa-shopping-cart"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      )}



    </div>
  );
};

export default ListOfProducts;
