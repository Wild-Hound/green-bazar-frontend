import './App.css'
import {createContext, useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProductsArea from './components/HomePage/ProductsArea'
import LoginArea from './components/LoginPage/LoginArea'
import CreateAccount from './components/CreateAccountPage/CreateAccount'
import ProtectedRoute from './components/Mech/ProtectedRoute'
import CheckOut from './components/CheckOutPage/CheckOut'
import MainNav from './components/Nav/MainNav'
import Admin from './components/AdminPage/Admin'
require('dotenv').config()

export const AuthContext = createContext()

function App() {

  const [auth,setAuth] = useState({logged:false,email:'',username:''})
  const [selectedProducts, setSelectedProducts] = useState([])
  const [produts,setProducts] = useState([])
  const [reRender, setReRender] = useState(false)

    useEffect(()=>{
        fetch('https://desolate-stream-90591.herokuapp.com/get/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
        setReRender(false)
    },[reRender])

  return (
    <AuthContext.Provider value={{produts,setProducts,auth,setAuth,selectedProducts, setSelectedProducts,setReRender}}>
      <div className="App">
        <Router>
          <MainNav></MainNav>
          <Switch>
            <Route exact path="/">
              <ProductsArea></ProductsArea>
            </Route>
            <Route path="/login">
              <LoginArea></LoginArea>
            </Route>
            <Route path="/createaccount">
              <CreateAccount></CreateAccount>
            </Route>
            <ProtectedRoute path="/checkout" component={CheckOut} isAuth={auth.logged}></ProtectedRoute>
            <ProtectedRoute path="/admin" component={Admin} isAuth={auth.logged}></ProtectedRoute>
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
