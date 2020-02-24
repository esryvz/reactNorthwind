import React, { Component } from "react";
import { connect } from "react-redux";
import { GetAllCategories,DeleteCategory } from "../data/ActionCreator";
import AddCategory from "./AddCategory";

class Categories extends Component {


  componentDidMount() {
    this.props.getAllCategories();
  }
  componentDidUpdate(){
    this.props.getAllCategories();
  }
  deleteHandler =(e)=>{
     this.props.deleteCategory(e.target.id);
  }
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-4">
            <AddCategory/>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h4>Categories</h4>
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.categories &&
                      this.props.categories.map(ct => {
                        return (
                          <tr key={ct.id}>
                            <th scope="row">{ct.id}</th>
                            <td>{ct.name}</td>
                            <td>{ct.description}</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger"  id={ct.id} onClick={this.deleteHandler}>Delete</button></td>
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

const mapStatetoProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatch = dispatch => {
  return {
    getAllCategories: () => dispatch(GetAllCategories()),
    deleteCategory:(id)=>dispatch(DeleteCategory(id))
  };
};
export default connect(mapStatetoProps, mapDispatch)(Categories);
