import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// importing components
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          {/* so we are setting the id to be optional here by adding the question marks because wen we just go to the
          cart it wont have any id except we to it through the productScreen */}
          <Route path="/cart/:id?" component={CartScreen} exact />
          <Route path="/" component={HomeScreen} exact />
          {/* So basically what i am saying here is that i am settting the route for the homescreen which is "/"
          so anytime someone goes to that route i want to render the homescreen but by default this will also render out
          anything above "/" like "/products/pages" so the "exact" there is to match that specific route alone */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
