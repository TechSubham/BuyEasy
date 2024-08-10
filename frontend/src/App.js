import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../src/Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import Home from '../src/Components/Pages/Home'
import MensFootwears from './Components/Shop/MensFootwears';
import WomensFootwears from './Components/Shop/WomensFootwear';
import Electronics from './Components/Shop/Electronics';
import MakeUp from './Components/Shop/MakeUp';
import Books from './Components/Shop/Books';
import MensClothing from './Components/Shop/MensClothing';
import WomensClothing from './Components/Shop/WomenClothing';
import Grocery from './Components/Shop/Grocery';
import Checkin from './Components/Pages/Checkin';
import CartPage from './Components/Pages/CartContext';
import Payment from './Components/Pages/Payment';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/MensClothing" element={<MensClothing/>}/>
          <Route path='/MensFootwears' element={<MensFootwears/>}/>
          <Route path='/WomensFootwears' element={<WomensFootwears/>}/>
          <Route path='/Electronics' element={<Electronics/>}/>
          <Route path='/MakeUp' element={<MakeUp/>}/>
          <Route path='/Books' element={<Books/>}/>
          <Route path='/WomensClothing' element={<WomensClothing/>}/> 
         <Route path='/Grocery' element={<Grocery/>}/> 
        <Route path="/product/:id" element={<Checkin />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/payment' element={<Payment/>}/>
      
        </Routes>
         

    
      </div>
      
    </Router>


  );
}

export default App;



