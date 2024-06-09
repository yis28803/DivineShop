import * as React from "react";
import { Route, Routes } from "react-router-dom";

// import { Component } from 'react';

import Header_user from "./layouts/Nguoidung_Header";
import Footer_user from "./layouts/Nguoidung_Footer";

import HomeUser from "./user/home";
import SanPhamCT from "./user/sanphamct";
import Giohang from "./user/giohang";
import ThanhToan from "./user/bill";

const DefaultLayout = () => {
  return (
    <>
      <Header_user />
      <Routes>
        <Route path="" element={<HomeUser />} />
        <Route path="home" element={<HomeUser />} />
        <Route path="sanphamct" element={<SanPhamCT />} />
        <Route path="giohang" element={<Giohang />} />
        <Route path="thanhtoan" element={<ThanhToan />} />
      </Routes>
      <Footer_user />
    </>
  );
};

export default DefaultLayout;
