import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "./App.css";
// 1. 전체 상품 페이지, 로그인 페이지, 상품상세페이지
// 2. 전체 상품 페이지 : 전체 상품을 볼수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지로 이동
// 4. 상품 디테일을 눌렀으나 로그인이 안되있을 시, 로그인 페이지로 이동
// 5. 로그인이 되어 잇을 경우 상품상세 페이지로 이동
// 6. 상품 상세 페이지에서 로그아웃 시, 로그아웃이 되고 로그인 페이지로 이동
// 7. 로그인 상태 시 로그아웃/ 로그아웃 시 로그인으로 표시

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
