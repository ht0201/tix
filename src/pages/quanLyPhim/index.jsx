import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getListMovieShowingAPI } from "../../redux/actions/movie.action";
// import "./styles.scss";
import { MDBDataTable } from "mdbreact";

import Pagination from "react-js-pagination";
import { useState } from "react";

const QuanLyPhim = () => {
  const [state, setState] = useState({ activePage: 1 });

  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getListMovieShowingAPI());
  }, []);

  const movieListShowing = useSelector((state) => state).movieReducer
    .movieListShowing;

  console.log("movieListShowing", movieListShowing, movieListShowing.length);

  function renderMovieItem() {
    let itemPerPage = 10;
    let startIndex = (state.activePage - 1) * itemPerPage;
    let endIndex = (state.activePage - 1) * itemPerPage + 10;

    return movieListShowing
      ?.map((movie, index) => {
        return (
          <tr key={index}>
            <th scope="row">{movie.maPhim}</th>
            <td>{movie.tenPhim}</td>
            <td>
              <img src={movie.hinhAnh} alt="" />
            </td>
            <td>{movie.moTa}</td>
            <td>{movie.maNhom}</td>
            <td>{movie.ngayKhoiChieu}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => handleCreateSchedule()}
                data-toggle="modal"
                data-target="#myModal"
              >
                Tao lich chieu
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleEditSchedule()}
              >
                Sua
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteSchedule()}
              >
                Xoa
              </button>
            </td>
          </tr>
        );
      })
      .slice(startIndex, endIndex);
  }

  function handleCreateSchedule() {}
  function handleEditSchedule() {}
  function handleDeleteSchedule() {}

  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    setState({ activePage: pageNumber });
  };
  return (
    <>
      <div className="container-fluid">
        <NavLink to="/admin/themphim" className="linkToThemPhim">
          <h1 className="mt-4"> Them phim</h1>
        </NavLink>
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="taiKhoan" className="sr-only">
              taiKhoan
            </label>
            <input
              type="text"
              className="form-control"
              id="taiKhoan"
              placeholder="taiKhoan"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Tim
          </button>
        </form>

        <div className="table-pagination">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Ma phim</th>
                <th scope="col">Ten phim</th>
                <th scope="col">Hinh anh</th>
                <th scope="col">Mo ta</th>
                <th scope="col">Ma nhom</th>
                <th scope="col">Ngay khoi chieu</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{renderMovieItem()}</tbody>
          </table>

          <Pagination
            activePage={state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={movieListShowing.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>

      {/* <!-- The Modal --> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">Modal body..</div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuanLyPhim;
