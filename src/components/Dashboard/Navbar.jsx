import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/AuthSlice";
import AuthLocalStorage from "../localStorage";

function Navbar() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.auth);
  // const { isLogin } = useSelector(state => state.auth);
  const { id, type } = AuthLocalStorage();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <div className="nav-links" id="navLink">
          <ul>
            <li>
              <i className="fa-solid fa-house-user"></i>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <i className="fa-solid fa-building"></i>
              <Link to="/companies">Firmalar</Link>
            </li>
            <li>
              <i className="fa-solid fa-window-restore"></i>
              <Link to="/products">Ürünler</Link>
            </li>

            {isLogin && type === "user" ? (
              <li>
                <i className="fa-solid fa-pen-to-square"></i>
                <Link to="/getOffer/category">Teklif Al</Link>
              </li>
            ) : (
              <li>
                <i className="fa-solid fa-pen-to-square"></i>
                <Link to="/getOffer/categoryShow">Teklif Al</Link>
              </li>
            )}

            {/* <li>
              <i className="fa-solid fa-pen-to-square"></i>
              <Link to="/getOffer/category">Teklif Al</Link>
            </li> */}
            <li>
              <i className="fa-solid fa-circle-info"></i>
              <Link to="/aboutUs">Hakkımızda</Link>
            </li>
          </ul>
          <ul>
            {isLogin && type === "user" && (
              <li>
                <i className="fa-solid fa-book-bookmark"></i>
                <Link to="/myOffers">Tekliflerim</Link>
              </li>
            )}
            {isLogin && type === "company" && (
              <li>
                <i className="fa-solid fa-paperclip"></i>
                <Link to="/giveOffer">Teklif Ver</Link>
              </li>
            )}
            {isLogin && type === "company" && (
              <li>
                <i className="fa-solid fa-book-bookmark"></i>
                <Link to="/giveOfferOther">Tekliflerim</Link>
              </li>
            )}
            {isLogin && type === "user" && (
              <li>
                <i className="fa-solid fa-gear"></i>
                <Link to={`/user/informations/${id}`}>Kullanıcı Ayarlarım</Link>
              </li>
            )}

            {isLogin && type === "company" && (
              <li>
                <i className="fa-solid fa-gear"></i>
                <Link to={`/companies/informations/${id}`}>
                  Firma Ayarlarım
                </Link>
              </li>
            )}

            <li>
              {isLogin ? (
                <Link to="/login" onClick={logoutHandler}>
                  <i className="fa-solid fa-right-from-bracket"></i> Çıkış Yap
                </Link>
              ) : (
                <Link to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> Giriş Yap
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
