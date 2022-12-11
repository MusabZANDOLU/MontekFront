import React, { useState, useEffect } from "react";
import { AuthLocalStorage } from "../localStorage";
import { BASE_URL } from "../../base.js";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import alertify from "alertifyjs";
import "../../assets/scss/login_Register_Info.scss";

const updateSuccessful = () => {
  alertify.alert(
    "Bilgi Güncelleme",
    "Firma bilgilerinizi başarıyla güncellediniz."
  );
};

const updateUnsuccessful = () => {
  alertify.alert("Bilgi Güncelleme", "Firma bilgileri güncellenemedi");
};

const CompanyInfoPage = () => {
  const [firmName, setFirmName] = useState();
  const [firmOfficial, setFirmOfficial] = useState();
  const [firmPhone, setFirmPhone] = useState();
  const [firmAddress, setFirmAdress] = useState();
  const [firmMail, setFirmMail] = useState();
  const [firmUrl, setFirmUrl] = useState();
  const [firmServices, setFirmServices] = useState();
  const { accessToken, id } = AuthLocalStorage();

  useEffect(() => {
    getCompanyById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCompanyById = async e => {
    const res = await axios.get(`${BASE_URL}/companies/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setFirmName(res.data.firmName);
    setFirmOfficial(res.data.firmOfficial);
    setFirmPhone(res.data.firmPhone);
    setFirmAdress(res.data.firmAddress);
    setFirmMail(res.data.firmMail);
    setFirmUrl(res.data.firmUrl);
    setFirmServices(res.data.firmServices);
  };

  const updateCompany = async e => {
    e.preventDefault();
    try {
      await axios
        .patch(
          `${BASE_URL}/companies/${id}`,
          {
            firmName,
            firmOfficial,
            firmPhone,
            firmAddress,
            firmMail,
            firmUrl,
            firmServices,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then(res => {
          updateSuccessful();
        });
    } catch (error) {
      console.log(error);
      updateUnsuccessful();
    }
  };

  return (
    <div className="loginAll">
      <Navbar />
      <div className="segment">
        <div className="InfoUserCompTitle">Firma Bilgileriniz</div>
      </div>
      <form className="formInfoUserComp" onSubmit={updateCompany}>
        <div className="coverLogin">
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Adı</div>
            <input
              className="inputInfoUserComp"
              value={firmName}
              onChange={e => setFirmName(e.target.value)}
              placeholder="Firma adı"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Yetkilisi</div>
            <input
              className="inputInfoUserComp"
              value={firmOfficial}
              onChange={e => setFirmOfficial(e.target.value)}
              placeholder="Firma yetkili adı"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Telefon</div>
            <input
              className="inputInfoUserComp"
              value={firmPhone}
              onChange={e => setFirmPhone(e.target.value)}
              placeholder="Firma telefon numarası"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Adresi</div>
            <input
              className="inputInfoUserComp"
              value={firmAddress}
              onChange={e => setFirmAdress(e.target.value)}
              placeholder="Firma adres"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Site Url</div>
            <input
              className="inputInfoUserComp"
              value={firmUrl}
              onChange={e => setFirmUrl(e.target.value)}
              placeholder="Firma mail adresiniz"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Eposta Adresi</div>
            <input
              className="inputInfoUserComp"
              value={firmMail}
              onChange={e => setFirmMail(e.target.value)}
              placeholder="Firma mail adresiniz"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Verilen Hizmetler</div>
            <input
              className="inputInfoUserComp"
              value={firmServices}
              onChange={e => setFirmServices(e.target.value)}
              placeholder="Örn. Katlanır Cam, Çelik Kapı, Duşakabin..."
            />
          </label>
        </div>
        <button className="red buttonLoggInfo">Bilgilerimi Güncelle</button>
      </form>
    </div>
  );
};
export default CompanyInfoPage;
