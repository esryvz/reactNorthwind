import React, { Component } from "react";
import { connect } from "react-redux";
import {
  GetAllCategories,
  GetAllSuppliers,
  AddProd,GetPaginationProducts
} from "../data/ActionCreator";

class AddProduct extends Component {
  state = {
    name: "",
    categoryID:0,
    supplierID:0,
    quantityPerUnit: "",
    unitPrice: "",
    unitsInStock: ""
  };

  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllSuppliers();
    
  }

  submitHandler = e => {
    
    e.preventDefault();   
  
    this.props.addProduct(
      this.state.name,
      this.state.categoryID,
      this.state.supplierID,
      this.state.quantityPerUnit,
      this.state.unitPrice,
      this.state.unitsInStock
    );    
    this.setState({
      name: "",
      category: "",
      supplier: "",
      quantityPerUnit: "",
      unitPrice: "",
      unitsInStock: ""
    });
    
  };

  changeHandler = e => {
    this.setState ({
        [e.target.name]: e.target.value
    })
    
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Add Products</h3>
            <hr />
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label>Product Name</label>
                <input className="form-control" name="name" onChange={this.changeHandler} value={this.state.name}/>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  className="custom-select"
                  name="categoryID"
                  onChange={this.changeHandler}
                  value={this.state.category}
                >
                  <option defaultValue>Choose...</option>
                  {this.props.categories.map(ct => {
                    return (
                      <option value={ct.id}  key={ct.id}>
                        {ct.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Supplier</label>
                <select
                  className="custom-select"
                  name="supplierID"
                  onChange={this.changeHandler}
                  value={this.state.supplier}
                >
                  <option defaultValue>Choose...</option>
                  {this.props.suppliers.map(sp => {
                    return (
                      <option value={sp.id} key={sp.id}>
                        {sp.companyName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Quantity Per Unit</label>
                <input className="form-control" name="quantityPerUnit" onChange={this.changeHandler}  value={this.state.quantityPerUnit}/>
              </div>
              <div className="form-group">
                <label>Unit Price</label>
                <input className="form-control" name="unitPrice" onChange={this.changeHandler}  value={this.state.unitPrice}/>
              </div>
              <div className="form-group">
                <label>Unit In Stock</label>
                <input className="form-control" name="unitsInStock" onChange={this.changeHandler}  value={this.state.unitsInStock}/>
              </div>
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    categories: state.categories,
    suppliers: state.suppliers
  };
};
const mapDispatch = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(GetAllCategories());
    },
    getAllSuppliers: () => {
      dispatch(GetAllSuppliers());
    },
    addProduct: (supplier, category, name, quantity, price, stock) => {
      dispatch(
        AddProd(supplier, category, name, quantity, price, stock)
      );
    },
    getPagination: pageNumber => {
        dispatch(GetPaginationProducts(pageNumber));
      }
  };
};

export default connect(mapState, mapDispatch)(AddProduct);
