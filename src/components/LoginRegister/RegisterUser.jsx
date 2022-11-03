import React, { useState } from "react";
import "../../assets/scss/login_Register_Info.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import alertify from "alertifyjs";
import PasswordChecklist from "react-password-checklist";

const unSuccesfullRegister = async () => {
  alertify.alert(
    "Kayıt işlemi başarısız.",
    "Yazmış olduğunuz mail adresi ile zaten bir kullanıcı mevcut. Lütfen mail adresinizi kontrol ediniz!",
    function () {
      alertify.warning("Teşekkür ederiz.");
    }
  );
};

const succesfullRegister = async () => {
  alertify.alert(
    "Kayıt işlemi başarılı",
    "Ailemize katıldığınız için teşekkür ederiz. Güvenliğiniz için lütfen kayıt olurken kullandığınız mail ve şifre ile giriş yapınız.",
    function () {
      alertify.success("Teşekkür ederiz.");
    }
  );
};

function RegisterUser() {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [eMail, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordShowIcon(!passwordShowIcon);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/users", {
          name,
          surName,
          type: "user",
          eMail,
          password,
        })
        .then(() => {
          navigate("/login");
          succesfullRegister();
        });
    } catch (error) {
      console.log(error);
      unSuccesfullRegister();
    }
  };

  return (
    <div className="loginAll">
      <div className="segment">
        <div className="logTitle">Kullanıcı Kayıt Sayfası</div>
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
              type="email"
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
                  passwordShowIcon ? "fa-solid fa-eye clssIcnOn" : "fa-solid fa-eye-slash clssIcnOff"
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

          <button className="red buttonLogg">Kayıt Ol</button>
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
export default RegisterUser;
