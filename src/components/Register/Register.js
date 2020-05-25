import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import R from '../../assets/R.png';
import './register.css';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    contactNumber: '',
  };

  handleUserRegisterData = (e, type) => {
    this.setState({
      [type]: e.target.value,
    })
  }

  render() {
    const { email, password, contactNumber } = this.state;
    return (
      <div className="modal">
        <div className="registerContainer">
          <Router>
            <Link to="/">
              <div className="logoHeader">
                <img src={R} width="80" height="80" />
              </div>
            </Link>
          </Router>
          <input type="email" value={email}  onChange={(e) => this.handleUserRegisterData(e, 'email')} placeholder="Email ID" />
          <input type="password" value={password}  onChange={(e) => this.handleUserRegisterData(e, 'password')} placeholder="Password" />
          <input type="text" value={contactNumber}  onChange={(e) => this.handleUserRegisterData(e, 'contactNumber')} placeholder="Contact number" />
          <div>
            <button className="submitBtn" onClick={() => { }}>Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;