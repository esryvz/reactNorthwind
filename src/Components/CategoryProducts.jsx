import React, { Component } from "react";

 class CategoryProducts extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity Per Unit</th>
              <th scope="col">Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(p => {
              return (
                <tr key={p.id}>
                  <th scope="row">{p.productID}</th>
                  <td>{p.name}</td>
                  <td>{p.unitPrice}</td>
                  <td>{p.quantityPerUnit}</td>
                  <td>{p.unitsInStock}</td>
                  <td>
                    <button className="btn btn-success" name="name" onClick={()=>this.props.addCart(p,1)} value={p.name}>Add to Cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryProducts;