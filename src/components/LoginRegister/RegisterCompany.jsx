import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/scss/login_Register_Info.scss";
import alertify from "alertifyjs";
import { useDispatch } from "react-redux";
import { registerCompanny } from "../../redux/auth/AuthSlice";
import PasswordChecklist from "react-password-checklist";

function RegisterCompany() {
  // const { id,isLogin, type, } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);

  function info1() {
    alertify.alert(
      "Firma Kayıt Hakkında",
      "Not: Kayıt sonrası 'Firma Ayarlarım' sekmesi ile firma ayarlarınızı doldurmanızı öneririz. Bilgilerinizi eksiksiz doldurmanız önemlidir!"
    );
  }

  const saveUser = async e => {
    e.preventDefault();
    dispatch(
      registerCompanny({
        name,
        surName,
        eMail,
        password,
        type: "company",
      })
    );
    setTimeout(() => {
      navigate("/login");
      info1()
    }, 2000);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordShowIcon(!passwordShowIcon);
  };

  return (
    <div className="loginAll">
      <div className="segment">
        <div className="logTitle">Firma Kayıt Sayfası</div>
      </div>
      <form className="formLogin" onSubmit={saveUser}>
        <div className="coverLogin">
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Adınız"
            />
          </label>
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={surName}
              onChange={e => setSurname(e.target.value)}
              placeholder="Soyadınız"
            />
          </label>
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={eMail}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Adresiniz"
            />
          </label>
          <div>
            <label className="labelLoggPass">
              <input
                required
                className="inputLogg"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={passwordShown ? "text" : "password"}
                placeholder="Şifreniz"
              />
              <i
                className={
                  passwordShowIcon ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
                onClick={togglePassword}
              />
            </label>
          </div>
          <label className="labelLoggPass">
            <input
              required
              className="inputLogg"
              value={passwordAgain}
              onChange={e => setPasswordAgain(e.target.value)}
              type={passwordShown ? "text" : "password"}
              placeholder="Şifre Tekrarı"
            />
            <i
              className={
                passwordShowIcon ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={togglePassword}
            />
          </label>

          <PasswordChecklist
          className="checkPass"
            rules={["number", "match", "notEmpty"]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
            messages={{
              // minLength: "8 Karakter",
              number: "En az 1 numara ",
              match: "Şifreler eşleşiyor.",
              notEmpty: "Boş olamaz",
            }}
          />
          <button onClick={info1} className="red buttonLogg">
            Kayıt Ol
          </button>
          <label className="labelLogg">
            <Link to="/login">
              <i className="fa-solid fa-house-user inputLogg iconReg"></i>
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}
export default RegisterCompany;
