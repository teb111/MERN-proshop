import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    // calling PRODUCT_LIST_REQUEST and setting loading to true because we are requesting for the products
    // then we are setting our products to an empty array because we are just making a request
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    // calling PRODUCT_LIST_SUCCESS and setting loading to false because we have sucessfully gotten our products
    // then we are setting our products to the payload{data} gotten back from the ProductAction
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    // calling PRODUCT_LIST_FAIL and setting loading to false because something went wrong and we did not get our products
    // then we are setting our products to the payload{error} gotten back from the ProductAction
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
