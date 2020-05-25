import React from 'react';
import './allProducts.css';

import Product from '../Product/Product';

class AllProducts extends React.Component {
  render() {
    const { sellingProducts } = this.props;
    const hasProductsToSell = !!sellingProducts && sellingProducts.length > 0;
    return (
      <div className="products_Container">
        {hasProductsToSell && (
          <h4>
            Total Products available: {sellingProducts.length}
          </h4>
        )}
        <div className="allProductsList_Container">
          {hasProductsToSell && sellingProducts.map(productItem => (
            <Product 
              product={productItem}
              // addProductToBag={addProductToBag}
              // addProductToWishlist={addProductToWishlist}
              key={productItem.id}
            />
          ))}
        </div>
        {!hasProductsToSell && (
          <div>
            <h2>
              <i>
              Currently there are no dresses available. Please come back later...
              </i>
            </h2>
          </div>
        )}
      </div>
    )
  }
}

export default AllProducts;