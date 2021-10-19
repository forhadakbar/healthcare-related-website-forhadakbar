import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import APIContextProvider from './Context/apiContext';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Profile from './Pages/Login/Profile/Profile';
import Register from './Pages/Login/Resgister/Register';
import NotFound from './Pages/NotFound/NotFound';
import Plans from './Pages/Plans/Plans';
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
            {/* Private Route */}
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            {/* Private Route */}
            <PrivateRoute path="/plans">
              <Plans></Plans>
            </PrivateRoute>

            {/* Private Route */}
            <PrivateRoute path="/services/:serviceId">
              <SeeDetails></SeeDetails>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
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
