import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar.js";
import Topbar from "./topbar.js";
import Dashboard from "./dashboard";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Createuser from "./Createuser";
import Login from "./Login";
import Portal from "./Portal";
import Uploadproduct from "./Uploadproduct";
import Viewuser from "./Viewuser";
import Viewproducts from "./Viewproducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<User />} />
              <Route path="users/createuser" element={<Createuser />} />
              <Route path="products" element={<Products />} />
              <Route path="products/uploadproducts" element={<Uploadproduct />} />
              <Route path="users/view/:id" element={<Viewuser />} />
              <Route path="products/view/:id" element={<Viewproducts />} />
      </Route> 
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
