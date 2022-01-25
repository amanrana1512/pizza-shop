import "./App.css";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Topbar from './components/Topbar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./Screens/HomeScreen";



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

      </Switch>
    </BrowserRouter>
  );
}

export default App;
