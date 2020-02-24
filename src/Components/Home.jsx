import React from "react";
import { connect } from "react-redux";
import {
  GetHomeCategories,
  GetAllCategories,
  GetCategoryProducts
} from "../data/ActionCreator";
import CategoryProducts from "./CategoryProducts";

class Home extends React.Component {

  
  componentDidMount() {
    this.props.getCategories();   
    this.getCatProducts(1) 
  }
  
  clearFilterHandler = () => {
    this.props.getAllCategories();
  };

  getCatProducts = (categoryID) =>{           
    this.props.getCategoryProducts(categoryID);  
  }

  

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  CATEGORIES{" "}
                  <span
                    className="btn btn-outline-info"
                    style={{ position:"absolute",right:"4%",fontSize:"12px" }}
                    onClick={this.clearFilterHandler}
                  >
                    Tümünü Gör
                  </span>
                </h5>
                <p className="card-text">Top 3</p>
                <hr />
                <ul className="list-group list-group-flush">
                  {
                    this.props.categories.map(ct => {
                      return (
                        <li className="list-group-item" key={ct.id} onClick={()=>this.getCatProducts(ct.id)} onChange={this.changeHandler}>
                          {ct.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">PRODUCTS </h5>
                    <CategoryProducts products={this.props.products} addCart={this.props.addCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    categories: state.categories,
    products: state.products
  };
};

const mapDispatch = dispatch => {
  return {
    getCategories: () => dispatch(GetHomeCategories()),
    getAllCategories: () => dispatch(GetAllCategories()),
    getCategoryProducts: id => dispatch(GetCategoryProducts(id)),
   
  };
};
export default connect(mapStatetoProps, mapDispatch)(Home);
