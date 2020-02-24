const initialState = {
  categories: [],
  products: [],
  suppliers: [],
  allproducts: [],
  cartItems: []
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOME_CATEGORIES":
      return { ...state, categories: action.data };
    case "GET_ALL_CATEGORIES":
      return { ...state, categories: action.data };
    case "GET_CATEGORY_PROUDCTS":
      return {
        ...state,
        products: action.data
      };
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        allproducts: action.data
      };
    case "GET_PAGINATION_PRODUCTS":
      return {
        ...state,
        products: action.data
      };
    case "GET_ALL_SUPPLIERS":
      return {
        ...state,
        suppliers: action.data
      };
    case "ADD_CATEGORY":
      let cat = {
        id: action.data.id,
        name: action.data.name,
        description: action.data.description
      };
      return {
        ...state,
        categories: [...state.categories, cat]
      };
    case "ADD_PRODUCT":
      let prod = {
        supplierID: action.data.supplier,
        categoryID: action.data.category,
        quantityPerUnit: action.data.quantity,
        unitPrice: action.data.price,
        unitsInStock: action.data.stock,
        unitsOnOrder: action.data.unitsOnOrder,
        reorderLevel: action.data.reorder,
        discontinued: action.data.discontinued,
        name: action.data.name
      };
      return {
        ...state,
        products: [...state.products, prod]
      };
    case "DELETE_CATEGORY":
      return {
        ...state
      };

    case "ADD_TO_CART":
      
     let addedCart = action.data;

     let findCart = state.cartItems.find(c=> c.product.id === addedCart.product.id)
          
     if(findCart){

      let cart = state.cartItems.map(c=>{
        if(c.product.id === addedCart.product.id){
          c.quantity +=1;
        }
        return c;
      })
        return{
          ...state,
          cartItems : cart
        }
     }else{
        return{
          ...state,
          cartItems:[...state.cartItems,addedCart]
        }
     }
      
    case "GET_CART_ITEMS":      
      return {
        ...state
      };
    default:
      return state;
  }
};

export default myReducer;
