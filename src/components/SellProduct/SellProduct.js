import React from 'react';
import './sellProduct.css';

// const d1 = "https://www.kleinfeldbridal.com/wp-content/uploads/2019/11/FACEBOOK_BLOG-PROMO-75.png";
// const d2 = "https://res.cloudinary.com/weddingdresses/image/fetch/w_515,h_730,c_fill,g_auto,f_auto,q_auto,dpr_auto/https://s3-us-west-1.amazonaws.com/wedding-dresses/watters-com-ora-1.jpg";

class SellProduct extends React.Component {
  state = {
    image: '',
    size: '',
    measurements: '', // chest, waist, hips, height
    appearanceData: '', // Color, fabric
    style: '', // Silhouette, Neck line, back, dress Length
    price: '',
    additionalInfo: '',
    emailId: '',
    phoneNumber: '',
  }

  handleSaveSellInfo = (e, type) => {
    this.setState({
      [type]: e.target.value,
    })
  }

  handleToSell = () => {
    const { sellItems } = this.props;
    sellItems(this.state);
  }

  render() {
    const {
      image,
      size,
      measurements,
      appearanceData,
      style,
      price,
      additionalInfo,
      emailId,
      phoneNumber,
    } = this.state;
    return (
      <div className="sellProducts">
        <div className="sell_heading">List the dress you want to Sell</div>
        <div className="dressData_container">
          <div>
            <input type="file" value={image} onChange={(e) => this.handleSaveSellInfo(e, 'image')} className="inputStyle" />
            <div>
              <h4>Size</h4>
              <input type="text" value={size} onChange={(e) => this.handleSaveSellInfo(e, 'size')} className="inputStyle" />
            </div>
            <div>
              <h4>Measurements</h4>
              <div>
                <input type="text" value={measurements} onChange={(e) => this.handleSaveSellInfo(e, 'measurements')} className="inputStyle" />
              </div>
            </div>
            <div>
              <h4>Appearance</h4>
              <div>
                <input type="text" value={appearanceData} onChange={(e) => this.handleSaveSellInfo(e, 'appearanceData')} className="inputStyle" />
              </div>
            </div>
            <div>
              <h4>Style</h4>
              <div>
                <input type="text" value={style} onChange={(e) => this.handleSaveSellInfo(e, 'style')} className="inputStyle" />
              </div>
            </div>
            <div>
              <h4>Price</h4>
              <div>
                <input type="text" value={price} onChange={(e) => this.handleSaveSellInfo(e, 'price')} className="inputStyle" />
              </div>
            </div>
            <div>
              <h4>Additional Information on Dress:-</h4>
              <div>
                <textarea rows="10" cols="75" value={additionalInfo} onChange={(e) => this.handleSaveSellInfo(e, 'additionalInfo')} className="inputStyle" />
              </div>
            </div>
            <div>
              <h3>Contact Information</h3>
              <div>
                <h4>Email Id</h4>
                <input type="text" value={emailId} onChange={(e) => this.handleSaveSellInfo(e, 'emailId')} className="inputStyle" />
              </div>
              <div>
                <h4>Phone number</h4>
                <input type="text" value={phoneNumber} onChange={(e) => this.handleSaveSellInfo(e, 'phoneNumber')} className="inputStyle" />
              </div>
            </div>
            <button onClick={this.handleToSell} className="primaryBtn">
              Sell your dress
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SellProduct;
