import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './CartContext';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CartProvider value="">
          <NavBar/>
          <Routes>
            <Route path='/productos/' element= {< ItemListContainer />} />
            <Route path='/detalle' element= {< ItemDetailContainer/>} />
            <Route path='/cart' element= {<CartWidget/>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  ); 
}

export default App;
