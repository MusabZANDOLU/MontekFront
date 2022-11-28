import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/AuthSlice";
import AuthLocalStorage from "../localStorage";
import { useState } from "react";

import svgCompanies from "../../assets/svg/navbar/svgCompanies.svg";
import svgProduct from "../../assets/svg/navbar/svgProduct.svg";
import svgGetOffer from "../../assets/svg/navbar/svgGetOffer.svg";
import svgAboutUs from "../../assets/svg/navbar/svgAboutUs.svg";
import svgHome from "../../assets/svg/navbar/svgHome.svg";
import svgInformation from "../../assets/svg/navbar/svgInformations.svg";
import svgMyOffer from "../../assets/svg/navbar/svgMyOffer.svg";
import svgLogin from "../../assets/svg/navbar/svgLogin.svg";
import svgLogout from "../../assets/svg/navbar/svgLogout.svg";
import svgGiveOffer from "../../assets/svg/navbar/svgGiveOffer.svg";
import svgMenu from "../../assets/svg/navbar/svgMenu.svg";
import svgClose from "../../assets/svg/navbar/svgClose.svg";
import svgUser from "../../assets/svg/navbar/svgUser.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLogin, id, type } = AuthLocalStorage();
  const [clicked, setClicked] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);
  
  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  const toggleMenuRight = () => {
    setClickedRight(!clickedRight);
  };

  return (
    <div>
      <nav>
        <div className="nav-links" id="navLink">
          <div id="navMobile" onClick={toggleMenu}>
          <img
              id="bar"
              src={clicked ? svgClose : svgMenu}
              alt=""
            />
          </div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              {/* <i className="fa-solid fa-house-user"></i> */}
              <img className="svgNavbar" src={svgHome} alt="" />
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-building"></i> */}
              <img className="svgNavbar" src={svgCompanies} alt="" />
              <Link to="/companies">Firmalar</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-window-restore"></i> */}
              <img className="svgNavbar" src={svgProduct} alt="" />
              <Link to="/products">Ürünler</Link>
            </li>

            {isLogin && type === "user" ? (
              <li>
                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                <img className="svgNavbar" src={svgGetOffer} alt="" />
                <Link to="/getOffer/category">Teklif Al</Link>
              </li>
            ) : (
              <li>
                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                <img className="svgNavbar" src={svgGetOffer} alt="" />
                <Link to="/getOffer/categoryShow">Teklif Al</Link>
              </li>
            )}

            <li>
              {/* <i className="fa-solid fa-circle-info"></i> */}
              <img className="svgNavbar" src={svgAboutUs} alt="" />
              <Link to="/aboutUs">Hakkımızda</Link>
            </li>
          </ul>
          <div id="navMobileRight" onClick={toggleMenuRight}>
            {/* <i
                id="bar"
                className={clickedRight ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              ></i> */}
            <img
              id="barRight"
              src={clickedRight ? svgClose : svgUser}
              alt=""
            />
          </div>
          <ul
            id="navbarRight"
            className={
              clickedRight ? "#navbarRight activeRight" : "#navbarRight"
            }
          >
            {isLogin && type === "user" && (
              <li>
                {/* <i className="fa-solid fa-book-bookmark"></i> */}
                <img className="svgNavbar" src={svgMyOffer} alt="" />
                <Link to="/myOffers">Tekliflerim</Link>
              </li>
            )}
            {isLogin && type === "company" && (
              <li>
                {/* <i className="fa-solid fa-paperclip"></i> */}
                <img className="svgNavbar" src={svgGiveOffer} alt="" />
                <Link to="/giveOffer">Teklif Ver</Link>
              </li>
            )}
            {isLogin && type === "company" && (
              <li>
                {/* <i className="fa-solid fa-book-bookmark"></i> */}
                <img className="svgNavbar" src={svgMyOffer} alt="" />
                <Link to="/giveOffer/mine">Tekliflerim</Link>
              </li>
            )}
            {isLogin && type === "user" && (
              <li>
                {/* <i className="fa-solid fa-gear"></i> */}
                <img className="svgNavbar" src={svgInformation} alt="" />
                <Link to={`/user/informations/${id}`}>Kullanıcı Ayarlarım</Link>
              </li>
            )}

            {isLogin && type === "company" && (
              <li>
                {/* <i className="fa-solid fa-gear"></i> */}
                <img className="svgNavbar" src={svgInformation} alt="" />
                <Link to={`/companies/informations/${id}`}>
                  Firma Ayarlarım
                </Link>
              </li>
            )}

            <li>
              {isLogin ? (
                <Link to="/login" onClick={logoutHandler}>
                  <img className="svgNavbar" src={svgLogout} alt="" /> Çıkış Yap
                </Link>
              ) : (
                <Link to="/login">
                  <img className="svgNavbar" src={svgLogin} alt="" /> Giriş Yap
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
