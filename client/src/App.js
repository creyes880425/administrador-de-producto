import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductoAdmin from './components/productos/admin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={<ProductoAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
