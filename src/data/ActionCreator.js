import axios from "axios";

export const GetHomeCategories = () => {
    return (dispatch) => {
    axios
      .get("http://localhost:3000/categories?_start=0&_end=3")
      .then(rsp => {
        dispatch(getHomeCat(rsp.data));
      })
      .catch(e => {});
  };
};

const getHomeCat = (data) => {    
  return {
    type: "GET_HOME_CATEGORIES",
    data: data
  }
};

export const GetAllCategories = () => {
  return (dispatch) => {
  axios
    .get("http://localhost:3000/categories")
    .then(rsp => {      
      dispatch(getAllCat(rsp.data));
    })
    .catch(e => {});
};
};

const getAllCat = (data) => {    
return {
  type: "GET_ALL_CATEGORIES",
  data: data
}
};

export const GetCategoryProducts =(categoryID)=>{
  return(dispatch)=>{
    axios.get("http://localhost:3000/products?categoryID="+categoryID)
    .then(rsp=>{
      dispatch(getCatProducts(rsp.data))
    })
    .catch(e => {});
  }
}

const getCatProducts=(data)=>{
  return{
    type:"GET_CATEGORY_PROUDCTS",
    data:data
  }
}

export const GetAllProducts = ()=>{
  return(dispatch)=>{
    axios.get("http://localhost:3000/products").then(rsp=>{
      dispatch(getAllProd(rsp.data))
    }).catch(e=>{})
  }
}

const getAllProd=(data)=>{
  return{
    type:"GET_ALL_PRODUCTS",
    data:data
  }
}

export const GetPaginationProducts = (pageNumber)=>{
  return(dispatch)=>{
    axios.get("http://localhost:3000/products?_page="+pageNumber+"&_limit=6")
    .then(rsp=>{
      dispatch(getPagination(rsp.data))
    }).catch(e=>{})
  }
}

const getPagination=(data)=>{
  return{
    type: "GET_PAGINATION_PRODUCTS",
    data:data
  }
}

export const GetAllSuppliers =()=>{
  return(dispatch)=>{
    axios.get("http://localhost:3000/suppliers")
    .then(rsp=>{
      dispatch({type:"GET_ALL_SUPPLIERS",data:rsp.data})
    }).catch(e=>{})
  }
}


export const AddCat = (name,description)=>{
  return(dispatch)=>{    
    const params={     
      name:name,
      description:description
    }
    axios.post('http://localhost:3000/categories/', params).then(res=>{
      dispatch({type:"ADD_CATEGORY",data:res.data})
    })
  }
}

export const AddProd = (name,category,supplier,quantity,price,stock)=>{
    return(dispatch)=>{
    
      const params={
        name: name,
        categoryID:category,
        supplierID:supplier,
        quantityPerUnit:quantity,
        unitPrice:parseInt(price),
        unitsInStock:parseInt(stock),
        unitsOnOrder:0,
        reorderLevel:1,
        discontinued:false,      
      }

      axios.post("http://localhost:3000/products/",params).then(res=>{
        dispatch({type:"ADD_PRODUCT",data:res.data})
      })
    }
}

export const DeleteCategory=(id)=>{
    return(dispatch)=>{
      axios.delete("http://localhost:3000/categories/"+id).then(rsp=>{
        dispatch({type:"DELETE_CATEGORY",data:id})
      })
    }
}

export const AddToCart =(product,quantity) =>{
     return(dispatch)=>{
       let cart={
         product: product,
         quantity:quantity
       }       
       dispatch({type:"ADD_TO_CART",data:cart})
     }
}

export const GetCartItems =()=>{
  return(dispatch)=>{
    dispatch({type:"GET_CART_ITEMS"})
  }
}