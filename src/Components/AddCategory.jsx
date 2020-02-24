import React, { Component } from "react";
import {connect} from "react-redux"
import {AddCat} from "../data/ActionCreator"

class AddCategory extends Component {

    state={
        id:"",
        name:"",
        description:""
    }

 submitHandler=(e)=>{
    e.preventDefault()
    
    this.props.addCategory(this.state.name,this.state.description) 
    this.setState({
        name:"",
        description:""
    }) 
 }
    changeHandler = (e)=>{

        if(e.target.id === "catName"){
          this.setState({
              name:e.target.value
          })
        }else if(e.target.id === "catDes"){
          this.setState({
            description: e.target.value
          })
        }
    }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Category</h4>
            <hr />
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label>Category Name</label>
                <input className="form-control" id="catName" onChange={this.changeHandler} value={this.state.name}/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input className="form-control" id="catDes" onChange={this.changeHandler} value={this.state.description}/>
              </div>
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </form>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch =(dispatch)=>{
    return{
      addCategory : (name,description) => dispatch(AddCat(name,description))
    }
}

export default connect(null,mapDispatch)(AddCategory);
