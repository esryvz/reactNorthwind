import React from "react";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {connect} from "react-redux"
import {GetCartItems,AddToCart} from "./data/ActionCreator"
class App extends React.Component {


  addCartHandler=(product,quantity)=>{
    this.props.addToCart(product,quantity);       
  }
  
  componentDidUpdate(){
    this.props.getCartItems();
  }
  
  render() { 
    
    
    return (
      <div>
        <BrowserRouter>
          <Navbar cartItems={this.props.cartItems} />
          <div className="container-fluid">
            <Switch>
              <Route component={()=><Home addCart={this.addCartHandler} />} path="/" exact  />
              <Route component={Categories} path="/category"  />
              <Route component={Products} path="/products" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapState =(state) =>{
  return{
    cartItems:state.cartItems
  }
}
const mapDispatch=(dispatch)=>{
  return{
    getCartItems:()=>dispatch(GetCartItems()), 
    addToCart : (product,quantity)=> dispatch(AddToCart(product,quantity))
  }
}
export default connect(mapState,mapDispatch)(App);
