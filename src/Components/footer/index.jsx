import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container pt-3">
        <div className="row row__topFooter">
          <div className="col-4 item">
            <h5>TIX</h5>
            <div className="row row__tix">
              <ul className="col-6">
                <li>
                  {" "}
                  <a href="#">FAQ</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Brand</a>
                </li>
              </ul>
              <ul className="col-6">
                <li>
                  {" "}
                  <a href="#">Thoa thuan</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Chinh sach</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4 item">
            <h5>ĐỐI TÁC</h5>
            <div className="row row__doitac">
              <div className="img">
                <img src="/images/galaxycine.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/lotte.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/megags.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/cinestar.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/bhd.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/cgv.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/bt.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/images/dongdacinema.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/TOUCH.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/cnx.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/images/STARLIGHT.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/dcine.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/zalopay_icon.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/payoo.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/images/VCB.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/VIETTINBANK.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/AGRIBANK.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/IVB.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/123go.png" alt="" />
              </div>
              <div className="img">
                <img src="/images/laban.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 item">
            <div className="row row__mobile__social">
              <div className="col-6">
                <h5>MOBILE APP</h5>
                <ul>
                  <li>
                    <a href="abc">
                      <img src="/images/apple-logo.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="abc">
                      <img src="/images/android-logo.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h5>SOCIAL</h5>
                <ul>
                  <li>
                    <a href="abc">
                      <img src="/images/facebook-logo.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="abc">
                      <img src="/images/zalo-logo.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row__address mt-3">
          <div className="col-9">
            <img src="/images/zion-logo.jpg" alt="" />
            <div className="contact">
              <h6>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>Email: support@tix.vn</p>
            </div>
          </div>
          <div className="col-3 boCongThuong">
            <img
              className="img__boCongThuong"
              src="/images/boCongThuong.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
