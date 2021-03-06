import React from 'react';
import axios from 'axios';
import '../styles/Header.css'

class FarmerHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    console.log('logging out');
    axios.post("/auth/logout").then(response => {
			console.log(response.data);
			if (response.status === 200) {
				window.location.href = "/login";
			}
		});
  }

  render() {
    return (
      <div className="headerbar">
        <div className="container-header">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a id="len1" className="hoverable" href="/viewproducts">View Products</a>
              <a id="len2" className="hoverable" href="/additems">Add Items</a>
              <a id="len3" className="hoverable" href="/fulfillment">Fulfill Orders</a>
              <a id="len4" className="hoverable" href="#" onClick={this.logout}>Logout</a>
            </div>
          </nav>
        </div>
      </div>
      )
    }
  }
  
export default FarmerHeader;