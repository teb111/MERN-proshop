import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

const Homescreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts()); // firing off our listProducts from our ProductActions
  }, [dispatch]);

  const userRegister = useSelector((state) => state.userRegister);
  const { success } = userRegister;

  return (
    <>
      {success && (
        <Message variant="success">Account Created Successfully</Message>
      )}
      <h1>Latest Products</h1>
      {/* check if loading is true from our prductReducer then set a loading image or text or spinner */}
      {/* check if there is an error and display it*/}
      {/* Else display the products */}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
