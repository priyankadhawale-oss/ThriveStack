import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();
  async function fetchBookData() {
    const result = await axios.get(`http://localhost:8081/book/${bookId}`);
    console.log(result.data);
    setBook(result.data);
  }
  useEffect(() => {
    fetchBookData();
  }, []);

  function deleteD(data) {
    axios.delete(`http://localhost:8081/book/${bookId}`, data);
    navigate("/user/showuser");
  }

  return (
    <div>
      <form onSubmit={() => deleteD()}>
        <h1>Delete Data</h1>
        <h3>
          Do you really want to delete{" "}
          <span style={{ color: "red" }}>{book.title}</span>data?
        </h3>
        <input type="Yes" className="btn btn-outline-danger"></input>
        <NavLink to={"/user/showuser"}>
          <button type="button" className="btn btn-outline-warning">
            NO
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default DeleteUser;
