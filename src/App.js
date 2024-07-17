import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookHistory from "./Component/Pages/BookHistory";
import BookStore from "./Component/Pages/BookStore";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import AddUser from "./Component/User/AddUser";
import ShowUser from "./Component/User/ShowUser";
import UpdateUser from "./Component/User/UpdateUser";
import DeleteUser from "./Component/User/DeleteUser";
import Error from "./Component/Pages/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/bookstore" element={<BookStore />} />
          <Route path="/bookhistory" element={<BookHistory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/adduser" element={<AddUser />} />
          <Route path="/user/showuser" element={<ShowUser />} />
          <Route path="/user/updateuser/:bookId" element={<UpdateUser />} />
          <Route path="/user/deleteuser/:bookId" element={<DeleteUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
