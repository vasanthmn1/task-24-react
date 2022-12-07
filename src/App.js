
import './App.css';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart';


function App() {
  return (
    <div className="App ">
      <h1 className='text-primary ms-5'>Add to cart</h1>
      <Cart />
    </div>
  );
}

export default App;
