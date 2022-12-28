import React from "react";
import { Link } from "react-router-dom";
import { AuthLocalStorage } from "../localStorage";
import "../../assets/scss/footer.scss";

function footer() {
  const { isLogin } = AuthLocalStorage();

  return (
    <div>
      <div className="footer">
        <div className="flexFooter">
          <div className="blockFooterOnly">
            <div className="footerLogoCover">
              <img
                className="footerLogo"
                src={require("../../assets/images/footer/montekFooter.png")}
                alt=""
              ></img>
            </div>
            <div className="footerText">
              Copyright © 2022 <br /> All Rights Reserved
            </div>
          </div>

          <div className="blockFooter">
            <div className="flexFooterInfo">
              <div className="titleFooter">
                Bilgilendirme <hr className="widthHr" />
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/category" : "getOffer/categoryShow"}
                  >
                    {isLogin ? "Teklif Al" : "Nasıl teklif alırım?"}
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link className="linkFooter" to="/aboutUs">
                    Hakkımızda
                  </Link>
                </div>
              </div>
              <div className="titleFooter">
                Ürünlerimiz <hr className="widthHr" />
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/foldingWindow" : "login"}
                  >
                    Balkon Kapatma Ürünleri
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/pvc" : "login"}
                  >
                    PVC Cam & Kapı Ürünleri
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/shopping" : "login"}
                  >
                    Mağaza Cam & Kapı Ürünleri
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/showerBox" : "login"}
                  >
                    Duş Kabini Çeşitleri
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/swatter" : "login"}
                  >
                    Sineklik Çeşitleri
                  </Link>
                </div>
                <div className="linkCoverFooter">
                  <Link
                    className="linkFooter"
                    to={isLogin ? "getOffer/aluminumHandrail" : "login"}
                  >
                    Alüminyum Korkuluk Çeşitleri
                  </Link>
                </div>
              </div>
              <div className="titleFooter">
                Bize Ulaşın <hr className="widthHr" />
                <div>
                  <div className="linkCoverFooter">
                    <div className="socialContainer">
                      <ul className="social-icons">
                        <li className="liFooter">
                          <a
                            className="linkFooterIcon"
                            href="https://www.linkedin.com/in/musab-zandolu"
                          >
                            <i className="fa fa-linkedin iFooter"></i>
                          </a>
                        </li>
                        <li className="liFooter">
                          <a
                            className="linkFooterIcon"
                            href="https://github.com/MusabZANDOLU"
                          >
                            <i className="fa-brands fa-github iFooter"></i>
                          </a>
                        </li>
                        <li className="liFooter">
                          <a className="linkFooterIcon" href="/">
                            <i className="fa fa-instagram iFooter"></i>
                          </a>
                        </li>
                        <li className="liFooter">
                          <a className="linkFooterIcon" href="/">
                            <i className="fa-brands fa-google iFooter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      Designed By Musab ZANDOLU <br />
                      <a
                        href="mailto:zandolu73@gmail.com"
                        className="linkFooter cursorFooter"
                      >
                        zandolu73@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
