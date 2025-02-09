import products from "../api/products.json";

const initialState = { products };

export const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(state);
      return{
        ... state,
        products: state.products.map(product =>{
          if (product.id === action.payload){
            return {
              ...product,
              inCart: product.inCart + 1,
              inventory: product.inventory - 1,
            };

          }
          else {
            return product
          };
        }),
      };
    case "CHECKOUT":
      return {
        ... state, 
        products: state.products.map(item  => {
          return {
            ...item, 
            inCart: 0,
          };
        })

      }

    default:
      return state;
  }
};
