
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import DeatalsServies from './Pages/DeatalsServies/DeatalsServies';
import Services from './Pages/Services/Services';

function App() {
  return (

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/service/:id">
            <DeatalsServies></DeatalsServies>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>



  );
}

export default App;
