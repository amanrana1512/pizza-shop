import "./App.css";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Topbar from './components/Topbar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import OrderScreen from "./Screens/OrderScreen";



function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <NavBar/>
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/orders" component={OrderScreen} exact />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
