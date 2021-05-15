import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
} from "../constants/productConstants";

// for all products
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    // calling PRODUCT_LIST_REQUEST and setting loading to true because we are requesting for the products
    // then we are setting our products to an empty array because we are just making a request
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    // calling PRODUCT_LIST_SUCCESS and setting loading to false because we have sucessfully gotten our products
    // then we are setting our products, page and pages to the payload{data} gotten back from the ProductAction but attaching them
    // because of the response we are getting back from the productController
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    // calling PRODUCT_LIST_FAIL and setting loading to false because something went wrong and we did not get our products
    // then we are setting our products to the payload{error} gotten back from the ProductAction
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// for a single product
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    // calling PRODUCT_LIST_REQUEST and setting loading to true because we are requesting for the products
    // then we are setting our products to an empty array because we are just making a request
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    // calling PRODUCT_DETAILS_SUCCESS and setting loading to false because we have sucessfully gotten our products
    // then we are setting our products to the payload{data} gotten back from the ProductAction
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    // calling PRODUCT_DETAILS_FAIL and setting loading to false because something went wrong and we did not get our products
    // then we are setting our products to the payload{error} gotten back from the ProductAction
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Delete a single product
// Admin only
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    // calling PRODUCT_DELETE_REQUEST and setting loading to true because we are requesting to delete a product
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    // calling PRODUCT_DELETE_SUCCESS and setting loading to true because we are requesting to delete a product
    // then setting success to true because we've sucessfully deleted our product
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    // calling PRODUCT_DELETE_FAIL and setting loading to false because something went wrong and we did not delete our product
    // then we are setting our products to the payload{error} gotten back from the ProductAction
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create a product
// Admin only
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// Create a product
// Admin only
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

// Review a product

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
