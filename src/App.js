import './App.css';
import Wishlist from "./components/Wishlist.jsx"
import {Vegetables} from "./components/Vegetables.jsx"


function App() {
  return (
    <div className="App">
      <h1>Wishlist</h1>
      <Wishlist />
      <h1>Vegetables</h1>
      <Vegetables />
    </div>
  );
}

export default App;
