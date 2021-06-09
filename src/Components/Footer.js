import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <h2>Download</h2>
        <button>APP STORE</button>
        <button>GOOGLE PLAY</button>
        <h2>Join our Email List</h2>
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="text" name="email" />
  </label>
  <button value="submit" type="submit">Submit</button>
</form>
      </div>
    )
  }
}

export default Footer;