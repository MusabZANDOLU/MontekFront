import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../base.js";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import AuthLocalStorage from "../localStorage";
import alertify from "alertifyjs";
import "../../assets/scss/login_Register_Info.scss";

const UpdateSuccesfull = () => {
  alertify.alert(
    "Kullanıcı Bilgilendirme",
    "Kullanıcı blgileriniz başarıyla güncellenmiştir."
  );
}

const UserInfoPage = () => {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [il, setIl] = useState();
  const [ilce, setIlce] = useState();
  const [tel, setTel] = useState();
  const [eMail, setEmail] = useState();
  const { accessToken, id } = AuthLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    getUsersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const getUsersById = async e => {
    const response = await axios.get(`${BASE_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setName(response.data.name);
    setSurname(response.data.surName);
    setIl(response.data.il);
    setIlce(response.data.ilce);
    setTel(response.data.tel);
    setEmail(response.data.eMail);
  }

  const updateUser = async e => {
    e.preventDefault();
    try {
      await axios.patch(
        `${BASE_URL}/users/${id}`,
        {
          name,
          surName,
          il,
          ilce,
          tel,
          eMail,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      UpdateSuccesfull();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginAll">
      <Navbar />
      <div className="segment">
        <div className="InfoUserCompTitle">Kullanıcı Bilgileriniz</div>
      </div>
      <form className="formInfoUserComp" onSubmit={updateUser}>
        <div className="coverSettingInfo">
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Ad</div>
            <input
              className="inputInfoUserComp"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Adınız"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Soyad</div>
            <input
              className="inputInfoUserComp"
              value={surName}
              onChange={e => setSurname(e.target.value)}
              placeholder="Soyadınız"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">İl</div>
            <input
              className="inputInfoUserComp"
              value={il}
              onChange={e => setIl(e.target.value)}
              placeholder="Bağlı olduğunuz il"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">İlçe</div>
            <input
              className="inputInfoUserComp"
              value={ilce}
              onChange={e => setIlce(e.target.value)}
              placeholder="Bağlı olduğunuz ilçe"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Telefon</div>
            <input
              className="inputInfoUserComp"
              value={tel}
              onChange={e => setTel(e.target.value)}
              placeholder="Telefon Numaranız"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">E-posta</div>
            <input
              className="inputInfoUserComp"
              value={eMail}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Adresiniz"
            />
          </label>
          <button className="red buttonLoggInfo">Bilgilerimi Güncelle</button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoPage;