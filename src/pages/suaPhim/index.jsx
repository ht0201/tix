// import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import "./styles.scss";

import {
  updateMovieAPI,
  updateMovieNoImageAPI,
  upLoadHinh,
} from "../../redux/actions/admin.quanlyphim.action";
import { useDispatch } from "react-redux";
import format from "dateformat";
import { NavLink, useHistory, useLocation } from "react-router-dom";

export default function SuaPhim() {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  const editMovie = location.movie;

  var contents = editMovie.hinhAnh.toString();
  var blob = new Blob([contents], { type: "text/plain" });
  var newFile = new File([blob], contents.split("/").pop(), {
    type: "text/plain",
  });

  const [file, setFile] = useState({
    fileUpLoad: newFile,
  });

  const [movie, setMovie] = useState({
    maPhim: editMovie.maPhim,
    tenPhim: editMovie.tenPhim,
    trailer: editMovie.trailer,
    maNhom: editMovie.maNhom,
    moTa: editMovie.moTa,
    ngayKhoiChieu: format(new Date(editMovie.ngayKhoiChieu), "dd/mm/yyyy"),
    danhGia: editMovie.danhGia,
    hinhAnh: file.fileUpLoad.name,
    biDanh: editMovie.biDanh,
  });
  // console.log(movie.ngayKhoiChieu);
  console.log(movie);

  function handleUpdateMovie(e) {
    e.preventDefault();
    console.log(file.fileUpLoad.name);
    console.log(editMovie.hinhAnh);
    if (file.fileUpLoad.name === editMovie.hinhAnh.split("/").pop()) {
      console.log("giong");
      dispatch(updateMovieNoImageAPI(movie, history));
    } else {
      console.log("khacs");
      dispatch(updateMovieAPI(movie, history, file.fileUpLoad));
    }
  }

  function handleChange(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    if (name === "ngayKhoiChieu") {
      console.log(value);
      setMovie({
        ...movie,
        [name]: format(new Date(value), "dd/mm/yyyy"),
      });
      return;
    } else if (name === "danhGia") {
      setMovie({
        ...movie,
        [name]: parseInt(value),
      });
      return;
    } else {
      setMovie({
        ...movie,
        [name]: value,
      });
    }
  }

  function handleChangeFileInputImage(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.files[0];
    console.log(name, value);
    setMovie({
      ...movie,
      [name]: value?.name,
    });
    setFile({
      fileUpLoad: value,
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    console.log("huy phim");
  }

  return (
    <>
      <form onSubmit={handleUpdateMovie}>
        <div className="row">
          <div className="col">
            <label> ma Phim </label>
            <input
              type="text"
              className="form-control"
              placeholder="maPhim"
              name="maPhim"
              value={movie.maPhim}
              onChange={handleChange}
              disabled
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
              value={movie.ngayKhoiChieu}
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
              value={movie.tenPhim}
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
              value={movie.danhGia}
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
              value={movie.trailer}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label> hinhAnh </label>
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="hinhAnh"
                name="hinhAnh"
                style={{ opacity: 1 }}
                // value={file.hinhAnh}
                onChange={handleChangeFileInputImage}
              />
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
              value={movie.maNhom}
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
              value={movie.biDanh}
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
            value={movie.moTa}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          value="Submit"
          className="btn btn-primary mr-2 mt-2"
        >
          Cập nhật
        </button>
        <NavLink to="/admin/quanlyphim">
          <button className="btn btn-secondary mt-2">Huỷ</button>
        </NavLink>
      </form>
    </>
  );
}
