
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import DeatalsServies from './Pages/DeatalsServies/DeatalsServies';
import AllServices from './Pages/AllServices/AllServices';
import Login from './Pages/Login/Login';
import NotFount from './Pages/NotFount/NotFount';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>

          <PrivateRoute path="/service/:id">
          <DeatalsServies></DeatalsServies>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>



  );
}

export default App;
