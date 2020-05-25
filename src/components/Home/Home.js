import React from 'react';
import './home.css';

const d1 = "https://www.kleinfeldbridal.com/wp-content/uploads/2019/11/FACEBOOK_BLOG-PROMO-75.png";
const d2 = "https://res.cloudinary.com/weddingdresses/image/fetch/w_515,h_730,c_fill,g_auto,f_auto,q_auto,dpr_auto/https://s3-us-west-1.amazonaws.com/wedding-dresses/watters-com-ora-1.jpg";

function Home() {
  return (
    <div>
      <h2>Find your dream Dress for your Dream-day here....</h2>
      <div className="img_container">
        <img src={d1} alt="dress" width="400" height="400" />
      </div>
      <div className="img_container">
        <img src={d2} alt="dress" width="400" height="400" />
      </div>
    </div>
  )
}

export default Home;