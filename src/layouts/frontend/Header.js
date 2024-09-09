import React from "react";
import "../../assets/fontend/css/style.css";

import "@fontsource/montserrat"; // Defaults to weight 400
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faSearch, faStore } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      {/* slide */}
      {/* <div className="slide1">
        <div>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày </div>
      </div> */}

      <div className="slide2">
        <div>
          <div>Điện thoại: 0932 064 588 (8h - 17h) Liên hệ</div>
        </div>
      </div>

      <div className="header">
        <div className="logo">
          <img src="src/assets/frontend/img" alt="logo" />
        </div>
        <div className="header-item">
          <ul>
            <li>
              <a href="https://www.google.com/">Trang chủ</a>
            </li>
            <li>
              <a href="https://www.google.com/">Quần áo bé gái</a>
            </li>
            <li>
              <a href="https://www.google.com/">Quần áo bé trai</a>
            </li>
            <li>
              <a href="https://www.google.com/">Đồ dùng mẹ và bé</a>
            </li>
            <li>
              {" "}
              <a href="https://www.google.com/">Thời trang trẻ em</a>
            </li>
          </ul>
        </div>

        <div className="search-bar">  
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>

        <div className="account">
          <div>
            <FontAwesomeIcon icon={faStore}  />
            <div>Cửa hàng</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <div>Tài khoản</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faBagShopping} />
            <div>Giỏ hàng</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
