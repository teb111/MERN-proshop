import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
// importing components
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen"
import OrderScreen from "./screens/OrderScreen"
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderListScreen from "./screens/OrderListScreen"
import { useSelector } from "react-redux"

// components stopped

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log(userInfo)
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {!userInfo && <Redirect to="/login" />}
          <Switch>
            <Route path="/shipping" component={ShippingScreen} exact />
            <Route path="/payment" component={PaymentScreen} exact />
            <Route path="/placeorder" component={PlaceOrderScreen} exact />
            <Route path="/order/:id" component={OrderScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            {/* so we are setting the id to be optional here by adding the question marks because wen we just go to the
          cart it wont have any id except we to it through the productScreen */}
            <Route path="/cart/:id?" component={CartScreen} exact />
            <Route path="/admin/userlist" component={UserListScreen} exact />
            <Route
              path="/admin/user/:id/edit"
              component={UserEditScreen}
              exact
            />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
              exact
            />
            <Route path="/admin/orderlist" component={OrderListScreen} exact />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
            />
            <Route path="/" component={HomeScreen} exact />
            {/* So basically what i am saying here is that i am settting the route for the homescreen which is "/"
          so anytime someone goes to that route i want to render the homescreen but by default this will also render out
          anything above "/" like "/products/pages" so the "exact" there is to match that specific route alone */}
          </Switch>
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
