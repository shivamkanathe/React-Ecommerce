import CustomNavbar from "./components/CustomNavbar";
import Category from "./Pages/Category";
import Footer from "./Pages/Footer";
import HomePage from "./Pages/HomePage";
import TodaysDeal from "./Pages/TodaysDeal";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CategoryDetail from "./components/CategoryDetail";
import ProductDetail from "./components/ProductDetail";
import Cart from "./Pages/Cart";
import Setting from "./Pages/Setting";
import LoginPage from "./Pages/LoginPage";
import AddAddress from "./components/AddAddress";
import ChangePassword from "./components/ChangePassword";
import Order from "./components/Order";


function App() {
  return (
    <div className="App">
     <CustomNavbar/>

     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/setting" component={Setting}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/category" component={Category}/>
        <Route exact path="/changePassword" component={ChangePassword}/>
        <Route exact path="/orders" component={Order}/>
        <Route exact path ="/todayDeal" component={TodaysDeal}/>
        <Route  exact path="/footer" component={Footer}/>
        <Route  exact path="/address" component={AddAddress}/>
        <Route  exact path="/category/:categoryName" component={CategoryDetail}/>
        <Route  exact path="/category/:categoryName/:id" component={ProductDetail}/>
        <Route  exact path="/todayDeal/:id" component={ProductDetail}/>
        
       
     </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
