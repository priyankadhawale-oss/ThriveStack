import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ShowUser = () => {
  const [book, setBook] = useState([]);

  async function fetchBookData() {
    const result = await axios.get("http://localhost:8081/book");
    console.log(result.data);
    setBook(result.data);
  }
  useEffect(() => {
    fetchBookData();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Book Title</th>
            <th scope="col">Author</th>
            <th scope="col">Review content</th>
            <th scope="col">Rating</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((obj) => {
            return (
              <tr>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.author}</td>
                <td>{obj.content}</td>
                <td>{obj.rating}</td>
                <td>{obj.createdat}</td>
                <td>
                  <NavLink to={`/user/updateuser/${obj.id}`}>
                    <button className="btn btn-outline-warning">Update</button>
                  </NavLink>
                  <NavLink to={`/user/deleteuser/${obj.id}`}>
                    <button className="btn btn-outline-danger">Delete</button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUser;
