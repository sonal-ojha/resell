import React from 'react';
import './product.css';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div key={product.id}>
        <div className="alignCenter">
          <img src={product.image} width="250" height="250" />
        </div>
        <div className="text size alignCenter">Size: {product.size}</div>
        <div className="text price alignCenter">Price: {product.price} </div>
        <div className="alignCenter">
          <button className="addToBag alignCenter" onClick={() => {}}>Add To Bag</button>
        </div>
      </div>
    )
  }
}

export default Product;