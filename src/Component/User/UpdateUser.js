import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { bookId } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  async function fetchBookData() {
    const result = await axios.get(`http://localhost:8081/book/${bookId}`);
    console.log(result.data);
    setValue("title", result.data.title);
    setValue("author", result.data.author);
    setValue("content", result.data.content);
    setValue("rating", result.data.rating);
    setValue("createdat", result.data.createdat);
  }
  useEffect(() => {
    fetchBookData();
  }, []);

  function savedata(data) {
    axios.put(`http://localhost:8081/book/${bookId}`, data);
    navigate("/user/showuser");
  }
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
          <button type="submit" className="btn btn-primary ">
            Update
          </button>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
