import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Code World</h1><br />
          <p>A revolutionary coding IDE for mobile devices.</p>
        </div>
        <div>
          <img src="https://images.hdqwalls.com/wallpapers/i-love-coding-xl.jpg" />
        </div>
      </div>
    )
  }
}

export default Header;