import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

class Navbar extends React.Component {
  renderCart() {
    return (
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <DropdownButton
              id="dropdown-basic-button"
              title={"My Cart - " + this.props.cartItems.length}
              variant="secondary"
              alignRight
            >
              {this.props.cartItems &&
                this.props.cartItems.map(cart => {
                  return (
                    <Dropdown.Item href="#/action-1" key={cart.product.id}>
                      {cart.product.name} -{" "}
                      <span className="badge badge-success">
                        {cart.quantity}
                      </span>{" "}
                    </Dropdown.Item>
                  );
                })}
            </DropdownButton>
          </li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Northwind
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {this.props.cartItems.length>0 ? this.renderCart() : <div></div>}
        </div>
      </nav>
    );
  }
}

export default Navbar;
