import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductoAdmin from './components/productos/admin';
import ProductoView from './components/productos/view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ProductoAdmin />} />
        <Route path="view/:id" element={<ProductoView />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <ProductoAdmin />
    // </>
  );
}

export default App;
