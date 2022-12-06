import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../base.js";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import "../../assets/scss/companies.scss";
import AuthLocalStorage from "../localStorage";
import svgWebLink from "../../assets/svg/company/svgWebLink.svg";
import svgFaceBook from "../../assets/svg/company/svgFacebook.svg";
import svgLinkedIn from "../../assets/svg/company/svgLinkedIn.svg";
import svgInstagram from "../../assets/svg/company/svgInstagram.svg";
import { Link } from "react-router-dom";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const { isLogin, id } = AuthLocalStorage();

  useEffect(() => {
    window.scrollTo(0, 0);
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const response = await axios.get(`${BASE_URL}/companies`);
    setCompanies(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="companies-all-content">
        <div className="companies-text">Firmalarımız</div>
        <hr />
        <div className="companies-all-table">
          {companies.map(companies => (
            <div
              className={
                isLogin && companies.userId === id
                  ? "radiogroupCompaniesOther"
                  : "radiogroupCompanies"
              }
              key={companies._id}
            >
              <div className="cmpny-text">
                <div className="border">
                  <div className="company-name">Firma Adı</div>
                  <div className="company-name-contnt">
                    {companies.firmName}
                  </div>
                </div>
                <div className="border">
                  <div className="company-title">Firma Yetkilisi</div>
                  <div className="company-contnt">{companies.firmOfficial}</div>
                </div>
                <div className="border">
                  <div className="company-title">Firma Telefonu:</div>
                  <div className="company-contnt">{companies.firmPhone}</div>
                </div>
                <div className="border">
                  <div className="company-title">Firma Adresi:</div>
                  <div className="company-contnt">{companies.firmAddress}</div>
                </div>
                <div className="border">
                  <div className="company-title">İletişim E-posta:</div>
                  <div className="company-contnt">{companies.firmMail}</div>
                </div>
                <div className="border">
                  <div className="company-title">Verilen hizmetler</div>
                  <div className="company-contnt">{companies.firmServices}</div>
                </div>
                <hr />
                <div className="comp-url">
                  <Link className="companyInfoLink" to={`/companies/informations/${id}`}>
                    {isLogin && companies.userId === id
                      ? "Bilgilerimi Güncelle"
                      : null}
                  </Link>
                  <a href={companies.firmUrl}>
                    <img className="spaceToIcon" src={svgWebLink} alt="" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <img className="spaceToIcon" src={svgFaceBook} alt="" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img className="spaceToIcon" src={svgInstagram} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <img className="spaceToIcon" src={svgLinkedIn} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Companies;
