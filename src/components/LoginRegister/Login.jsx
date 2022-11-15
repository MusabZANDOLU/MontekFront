import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/AuthSlice";
import "../../assets/scss/login_Register_Info.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eMail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);

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
            <button className="red buttonLogg">
              <i className="icon ion-md-lock"></i> Giriş
            </button>
          </div>
        </form>
        <div className="regsDiv">
          <Link to="/register/user">
            <button className="buttonLogg regBtn">Yeni Kullanıcı Kayıt</button>
          </Link>
          <Link to="/register/company">
            <button className="buttonLogg regBtn">Yeni Firma Kayıt</button>
          </Link>
        </div>
        <div className="bottonTextLog">
          <a className="bottonTextLog" href="/">
            Kayıt olmadan devam et
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
