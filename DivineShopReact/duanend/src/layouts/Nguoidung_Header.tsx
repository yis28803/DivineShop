import * as React from "react";
import { Component } from "react";

const Header_user = () => {
  return (
    <>
      <div>
        <div className="cau1">
          <div className="cau2">
            <div className="cau3">
              <div className="cau4">
                <div className="cau5">
                  <button type="button" className="nutphai" />
                  <button type="button" className="nuttrai" />
                  <div>
                    <a href="_blank" target="_blank" rel="noreferrer">
                      Đĩa Window, Office Full VAT
                    </a>
                  </div>
                </div>
              </div>
              <div className="tieudethanghang">
                <a
                  href="_blank"
                  target="_blank"
                  rel="noreferrer"
                  className="dongthanghang"
                  style={{ marginLeft: "1rem" }}
                >
                  <i className="fa-solid fa-book" />
                  <div style={{ marginLeft: "0.75rem" }}>
                    Hướng dẫn mua hàng
                  </div>
                </a>
                <a
                  href="_blank"
                  target="_blank"
                  rel="noreferrer"
                  className="dongthanghang"
                  style={{ marginLeft: "1rem" }}
                >
                  <i className="fa-solid fa-laptop-medical" />
                  <div style={{ marginLeft: "0.75rem" }}>Ưu đãi khách hàng</div>
                </a>
                <a
                  href="_blank"
                  target="_blank"
                  rel="noreferrer"
                  className="dongthanghang"
                  style={{ marginLeft: "1rem" }}
                >
                  <i className="fa-solid fa-phone" />
                  <div style={{ marginLeft: "0.75rem" }}>Thông tin liên hệ</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dinhdangtieude_DivineShop_1">
          <div className="thutieude">
            <div
              className="dinhdangdongtieude"
              style={{ marginTop: "0.75rem" }}
            >
              <a
                className="conrongthanghang"
                title="Trang chủ"
                href="http://127.0.0.1:8000"
              >
                <img
                  loading="lazy"
                  src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
                  className="thuconrong"
                  alt="Divine Shop"
                />
                <h4 style={{ padding: "0.75rem" }}>Divine Shop</h4>
              </a>
              <div className="thunhotieude">
                <button type="button" title="Trình đơn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0-12 5.373-12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0-12 5.373-12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0-12 5.373-12 12v32c0 6.627-5.373 12-12 12z" />
                  </svg>
                </button>
              </div>
              <div style={{ width: 436 }}>
                <form role="search" method="post">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "rgb(11, 11, 185)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <div style={{ display: "flex", position: "relative" }}>
                      <input
                        type="search"
                        className="phongtotimkiem"
                        placeholder="Tìm kiếm sản phẩm"
                        autoComplete="off"
                        name="kyw"
                      />
                      <button
                        type="submit"
                        className="chinhotimkiem"
                        aria-label="Search"
                        name="timkiem"
                      >
                        <svg
                          className="chinhbieutuongtimkiem"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c315-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="didangdangnhap">
                <div className="didangthanghangdangnhap">
                  <button type="button" className="vongtronuser">
                    <svg
                      style={{
                        fill: "currentColor",
                        minWidth: "1.25em",
                        height: "1.25rem",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    />
                    <i
                      className="fa-solid fa-user"
                      style={{ marginRight: 16, fontSize: 20 }}
                    />
                  </button>
                  <div className="gopdndk" style={{ marginLeft: "0.75rem" }}>
                    <a href="http://127.0.0.1:8000/login">
                      <div style={{ marginLeft: "0.5rem" }}>Log in</div>
                    </a>
                    <div style={{ marginLeft: "0.5rem" }}>/</div>
                    <a
                      href="http://127.0.0.1:8000/register"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexShrink: 0,
                  border: "2px #fff solid",
                  borderRadius: 5,
                }}
              >
                <a
                  className="dinhdanggiohang"
                  href="http://127.0.0.1:8000/save-cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    style={{
                      margin: "0.5rem",
                      height: "1.25em",
                      fill: "currentColor",
                    }}
                  >
                    <path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" />
                  </svg>
                  <div style={{ margin: "0.5rem" }}>Giỏ hàng</div>
                  <div className="dinhdangsogiohang">0</div>
                </a>
              </div>
            </div>
            <div
              className="didangdongthanghang"
              style={{ marginTop: "2.25rem" }}
            >
              <a className="dongthanghang" href="_blank">
                <i className="fa-solid fa-eye" />
                <div style={{ marginLeft: "0.75rem" }}>
                  Sản phẩm bạn vừa xem
                </div>
              </a>
              <a className="dongthanghang" href="_blank">
                <i className="fa-solid fa-fire-flame-curved" />
                <div style={{ marginLeft: "0.75rem" }}>Sản phẩm mua nhiều</div>
              </a>
              <a className="dongthanghang" href="_blank">
                <i className="fa-solid fa-percent" />
                <div style={{ marginLeft: "0.75rem" }}>Sản phẩm khuyến mại</div>
              </a>
              <a
                href="_blank"
                target="_blank"
                rel="noreferrer"
                className="dongthanghang"
              >
                <i className="fa-solid fa-map-location-dot" />
                <div style={{ marginLeft: "0.75rem" }}>Đại lý giao dịch</div>
              </a>
              <a className="dongthanghang" href="_blank">
                <i className="fa-solid fa-credit-card" />
                <div style={{ marginLeft: "0.75rem" }}>
                  Hình thức thanh toán
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_user;
