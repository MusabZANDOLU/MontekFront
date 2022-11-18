import React, { useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/aboutUs.scss";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="aboutAllPage">
        <div className="aboutFlex">
          <div className="logoCover">
            <img
              className="aboutLogo"
              src={require("../../assets/images/footer/montekFooter.png")}
              alt=""
            ></img>
          </div>

          <div className="aboutRightContent">
            <div className="infoIcons">
              <div className="aboutTextTitle">Kalite ve Güven Herkesin Hakkı</div>
              <div className="aboutText">
                Misyonu ile çıktığımız bu yolda, siz değerli kullanıcılarımız
                ile beraber büyüyerek ve öğrenerek, birlikte çok daha güzel yerlere
                gelmeyi planlıyoruz. Kullanıcılarımıza, bir arayış ya da aracı
                ihtiyacı hissettirmeden, kısa zamanda daha uygun işler
                yaptırabilmek, firmalarımıza ise daha çok müşteriye daha hızlı
                şekilde ulaşabilme imkanları sağlayarak kalite, güven ve
                istihdam artışı ile hep beraber yürümek istiyoruz. <br /> Bizi
                tercih ettiğiniz için çok teşekkür ederiz...
              </div>
            </div>
            <div className="infoIcons">
              <div className="aboutContactTitle">Sosyal Medya Hesaplarımız</div>
              <div className="aboutSpaceBtween">
                <div className="aboutText">
                  <div>
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
                      <li className="liFooter">
                        <a className="linkFooterIcon" href="/">
                          <i className="fa-brands fa-twitter iFooter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutFlex">
          <div className="aboutFooterAllLeft aboutFlex">
            <div className="aboutFooterText">
              Bu site 2022 yılında Musab ZANDOLU tarafından kodlanmıştır.
            </div>
          </div>
          <div className="aboutFooterAllRight aboutBlock">
            <div className="aboutFooterText">
              <div className="aFooterT">Adres:</div>
              <div className="aFooterA">Serdivan / SAKARYA</div>
            </div>
            <div className="aboutFooterText">
              <div className="aFooterT">Telefon:</div>
              <div className="aFooterA">5500 000 0000</div>
            </div>
            <div className="aboutFooterText">
              <div className="aFooterT">Fax:</div>
              <div className="aFooterA">5500 000 0000</div>
            </div>
            <div className="aboutFooterText">
              <div className="aFooterT">Mail:</div>
              <div className="aFooterA"><a className="aFooterL" href="mailto:zandolu73@gmail.com">zandolu73@gmail.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
