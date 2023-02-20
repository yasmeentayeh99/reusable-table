import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Users} from "./Pages/Users";
import {Products} from "./Pages/Products";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/users" element={<Users/>} />
         <Route path="/products" element={<Products/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
