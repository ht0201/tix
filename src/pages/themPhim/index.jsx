// import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import "./styles.scss";

import { createMovieAPI } from "../../redux/actions/admin.quanlyphim.action";
import { useDispatch } from "react-redux";
import format from "date-format";

export default function ThemPhim() {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const [movie, setMoive] = useState({});
  //   const userLogin = useSelector((state) => state).userReducer.userLogin;

  function handleCreateMovie(e) {
    e.preventDefault();
    let newMovie = { ...movie };

    dispatch(createMovieAPI(newMovie));
  }

  function handleCancel(e) {
    e.preventDefault();
    console.log("huy phim");
  }

  function handleChange(e) {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    console.log(typeof name);

    if (name === "ngayKhoiChieu") {
      let newValue = format("dd-MM-yyyy", new Date(value));

      console.log(newValue);
      setMoive({
        ...movie,
        [name]: newValue,
      });
      return;
    } else if (name === "danhGia") {
      let newValue = parseInt(value);

      console.log(newValue);
      setMoive({
        ...movie,
        [name]: newValue,
      });
      return;
    } else {
      console.log(name, value);

      setMoive({
        ...movie,
        [name]: value,
      });
    }
  }

  function handleChangeFileInputImage(e) {
    var fileName = e.target.value.split("\\").pop();
    document.getElementById("custom-file-label").innerHTML = fileName;

    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    console.log(name, fileName);

    if (name === "hinhAnh") {
      let newValue = fileName;

      console.log(newValue);
      setMoive({
        ...movie,
        [name]: newValue,
      });
      return;
    }
  }

  return (
    <>
      <form onSubmit={handleCreateMovie}>
        <div className="row">
          <div className="col">
            <label> ma Phim </label>
            <input
              type="text"
              className="form-control"
              placeholder="maPhim"
              name="maPhim"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label> ngay khoi chieu </label>
            {/* <input
              type="text"
              className="form-control"
              placeholder="ngayKhoiChieu"
              name="ngayKhoiChieu"
              onChange={handleChange}
            /> */}

            <input
              type="datetime-local"
              className="form-control"
              placeholder="ngayKhoiChieu"
              name="ngayKhoiChieu"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label> ten Phim </label>
            <input
              type="text"
              className="form-control"
              placeholder="tenPhim"
              name="tenPhim"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label> Danh gia </label>
            <input
              type="text"
              className="form-control"
              placeholder="danhGia"
              name="danhGia"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label> Trailer </label>
            <input
              type="text"
              className="form-control"
              placeholder="trailer"
              name="trailer"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            {/* <label> hinhAnh </label>
            <input
              type="text"
              className="form-control"
              placeholder="hinhAnh"
              name="hinhAnh"
              onChange={handleChange}
            /> */}
            <label> hinhAnh </label>
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                name="hinhAnh"
                onChange={handleChangeFileInputImage}
                // onChange={handleChange}
              />
              <label
                id="custom-file-label"
                className="custom-file-label"
                htmlFor="hinhAnh"
                // onChange={handleChange}
              >
                Choose file
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label> ma Nhom</label>
            <input
              type="text"
              className="form-control"
              placeholder="maNhom"
              name="maNhom"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label> Bi danh </label>
            <input
              type="text"
              className="form-control"
              placeholder="biDanh"
              name="biDanh"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <label> Mo ta </label>
          <textarea
            type="textarea"
            className="form-control"
            placeholder="moTa"
            name="moTa"
            rows="3"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          value="Submit"
          className="btn btn-primary mr-2 mt-2"
        >
          {" "}
          Luu{" "}
        </button>
        <button className="btn btn-secondary mt-2"> Huy </button>
      </form>
    </>
  );
}
