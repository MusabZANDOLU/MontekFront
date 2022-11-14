import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/companies.scss";
import axios from "axios";
import { BASE_URL } from '../../base.js'

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
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
            <div className="radiogroupCompanies" key={companies._id}>
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
                  <a href={companies.firmUrl}>
                    <i className="fa-solid fa-globe spaceToIcon"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook spaceToIcon"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram spaceToIcon"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin spaceToIcon"></i>
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
