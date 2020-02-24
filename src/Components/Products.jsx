import React from "react";
import { connect } from "react-redux";
import {
  GetAllProducts,
  GetPaginationProducts,
  GetAllCategories,
  GetAllSuppliers
} from "../data/ActionCreator";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";

class Products extends React.Component {
  componentDidMount() {
    this.props.getPagination(1);
    this.props.getAllProducts();
    this.props.getAllCategories();
    this.props.getAllSuppliers();
  }

  
  paginationHandler = pageNumber => {
    this.props.getPagination(pageNumber);
  };

  getPages = () => {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(this.props.allproducts.length / 6); i++) {
      numbers.push(i);
    }
    return numbers;
  };

  getSupplierName = pID => {
    let supplierName = this.props.suppliers.filter(sup => {
      return sup.id === pID;
    });
    return supplierName;
  };

  getCategoryName = pID => {
    let categoryName = this.props.categories.filter(cat => {
      return cat.id === pID;
    });
    return categoryName;
  };
  render() {
    const pageNumbers = this.getPages();
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-3">
            <AddProduct />
          </div>
          <div className="col-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <h3 className="card-title ml-3">Products</h3>
                  <ul
                    className="pagination"
                    style={{ right: "2%", position: "absolute" }}
                  >
                    {pageNumbers.map(n => {
                      return (
                        <li className="page-item" key={n}>
                          <Link
                            className="page-link"
                            to={"/products/"}
                            onClick={() => this.paginationHandler(n)}
                          >
                            {n}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <table className="table table-hover">
                  <thead className="thead-dark" style={{ fontSize: "12px" }}>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity Per Unit</th>
                      <th scope="col">Units In Stock</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Category</th>
                      <th scope="col">Units On Order</th>
                      <th scope="col">Reorder Level</th>
                      <th scope="col">Discontinued</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.products.map(p => {
                      return (
                        <tr key={p.id}>
                          <th scope="row">{p.id}</th>
                          <td>{p.name}</td>
                          <td>{p.unitPrice}</td>
                          <td>{p.quantityPerUnit}</td>
                          <td>{p.unitsInStock}</td>
                          <td>
                            {this.getSupplierName(p.supplierID).map(sup => {
                              return sup.companyName;
                            })}
                          </td>
                          <td>{this.getCategoryName(p.categoryID).map(cat => {
                              return cat.name;
                            })}</td>
                          <td>{p.unitsOnOrder}</td>
                          <td>{p.reorderLevel}</td>
                          <td>{p.discontinued}</td>
                          <td>
                            <button className="btn btn-warning">Update</button>
                          </td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    products: state.products,
    categories: state.categories,
    suppliers: state.suppliers,
    allproducts: state.allproducts
  };
};
const mapDispatch = dispatch => {
  return {
    getAllProducts: () => {
      dispatch(GetAllProducts());
    },
    getPagination: pageNumber => {
      dispatch(GetPaginationProducts(pageNumber));
    },
    getAllCategories: () => {
      dispatch(GetAllCategories());
    },
    getAllSuppliers: () => {
      dispatch(GetAllSuppliers());
    }
  };
};
export default connect(mapState, mapDispatch)(Products);
