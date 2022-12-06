import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/AuthSlice";
import AuthLocalStorage from "../localStorage";
import "../../assets/scss/login_Register_Info.scss";
import { logout } from "../../redux/auth/AuthSlice";
const Login = () => {
  const { isLogin, name, surName } = AuthLocalStorage();
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState();
  const [eMail, setEmail] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordShowIcon(!passwordShowIcon);
  };

  const loginPost = async e => {
    e.preventDefault();
    dispatch(login({ eMail, password }));
    
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="loginAll">
      <div>
        <div className="segment">
          <div className="logTitle">MONTEK'E HOŞGELDİNİZ</div>
        </div>
        <form className="formLogin" onSubmit={loginPost}>
          <div className="coverLogin">
            <label className="labelLogg">
              <input
                required={true}
                className="inputLogg"
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Adresiniz"
                autoFocus
              />
            </label>
            <div>
              <label className="labelLogg">
                <input
                  required={true}
                  className="inputLogg"
                  type={passwordShown ? "text" : "password"}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Şifre"
                />
                <i
                  className={
                    passwordShowIcon
                      ? "fa-solid fa-eye clssIcnOnLog"
                      : "fa-solid fa-eye-slash clssIcnOffLog"
                  }
                  onClick={togglePassword}
                />
              </label>
            </div>
            <div className="logBtnCenter">
              <button className="red buttonLogg">Giriş</button>
            </div>
          </div>
        </form>
        <div className="regsDiv">
          <Link className="regLink" to="/register/user">
            <button className="buttonLoggRegister regBtn">
              Kullanıcı Kayıt
            </button>
          </Link>
          <Link className="regLink" to="/register/company">
            <button className="buttonLoggRegister regBtn">Firma Kayıt</button>
          </Link>
        </div>
        <div className="bottonTextLog">
          <a className="bottonTextLog" href="/">
            {isLogin
              ? "Sn. " +
                name.toLocaleUpperCase() +
                " " +
                surName.toLocaleUpperCase() +
                " sisteme girişiniz mevcut. Buradan Ana sayfaya gidebilirsiniz."
              : "Kayıt Olmadan Devam Et"}
          </a>
          <br />
          <br />
          <Link className="logoutLoginPage" to="/login" onClick={logoutHandler}>
            {isLogin ? "Çıkış Yap" : null}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
