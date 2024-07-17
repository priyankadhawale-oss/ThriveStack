import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  function savedata(data) {
    axios.post("http://localhost:8081/book", data);
    console.log(data);
    alert("Data Added Successfully!!!");
    navigate("/user/showuser");
  }
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit(savedata)}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            {...register("author")}
          />
        </div>
        <div className="col-6">
          <label htmlFor="content" className="form-label">
            Review Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            {...register("content")}
          />
        </div>
        <div className="col-6">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            {...register("rating")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="createdat" className="form-label">
            Created At
          </label>
          <input
            type="date"
            className="form-control"
            id="createdat"
            {...register("createdat")}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Data
          </button>
          <button type="reset" className="btn btn-danger">
            Clear Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
