import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import APIContextProvider from './Context/apiContext';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Pricing from './Pages/Pricing/Pricing';
import SeeDetails from './Pages/SeeDetails/SeeDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>

      <APIContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/pricing">
              <Pricing></Pricing>
            </Route>

            <Route path="/services/:serviceId">
              <SeeDetails></SeeDetails>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </APIContextProvider>


    </div>
  );
}

export default App;
