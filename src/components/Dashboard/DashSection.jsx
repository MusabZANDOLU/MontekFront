import React, { useEffect } from "react";
import { AuthLocalStorage } from "../localStorage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import InfoDataCount from "./InfoDataCount";
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/dashSection.scss";

const slider = () => {
  const { isLogin, name, surName, type } = AuthLocalStorage();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="allDash">
      <Navbar />
      <section className={type === "company" ? "headerComp" : "header"}>
        <div>
          {isLogin === true ? (
            <h3 className="searchText">
              Montek'e hoş geldiniz.
              <br />
              <br />
              <br />
              <div className="wrapperSliderText">
                Sn. {name} {surName}
              </div>
            </h3>
          ) : (
            <h3 className="searchText">
              Montek'e hoş geldiniz.
              <br />
              İstediğiniz ürün için kolayca teklif hazırlayıp fiyatları
              karşılaştırabilirsiniz.
              <br />
              Daha fazlası için sitemizi dolaşın.
              <br />
              <br />
              <div className="wrapperSliderText">
                KALİTE VE GÜVEN HERKESİN HAKKI
              </div>
            </h3>
          )}
        </div>
      </section>
      {!isLogin || type === "user" ? (
        <div>
          <div className="dashProductText">Hizmet Verdiğimiz Ürünler</div>
          <hr />
          <div className="sliderClass">
            <Carousel />
            <div className="steps">
              <h1>NASIL TEKLİF ALIRIM?</h1>
            </div>
            <hr />
            <div className="stepRow">
              <div className="categori-col">
                <h3>1. Adım</h3>
                <p>
                  Teklif alabilmek için öncelikle sitemize giriş yapmadıysanız
                  lütfen giriş yapınız...
                </p>
              </div>
              <div className="categori-col">
                <h3>2. Adım</h3>
                <p>
                  Teklif Al sekmesine gidip istediğiniz ürün için montaj yeri ya
                  da ürünü seçebilir ve istenilen ürüne uygun adımları takip
                  edip kolayca teklif verebilirsiniz.
                </p>
              </div>
              <div className="categori-col">
                <h3>3. Adım</h3>
                <p>
                  Bizde işinin ehli insanları sizle buluşturuz. Sizde
                  karşılaştırır ve seçersiniz.
                </p>
              </div>
            </div>
            <div className="icerikAll">
              <div className="iceriks">
                <div>
                  <div className="icerik-baslik-1">Kaliteli Hizmet</div>
                  <div className="icerik-1">
                    Tecrübeli firmalarımız sayesinde işinizi en kolay ve temiz
                    şekilde yaptırabileceksiniz. Kalite ve hizmeti sizlere yan
                    yana sunuyoruz.
                  </div>
                </div>
                <div>
                  <img
                    className="icerik-resim-1"
                    src={require("../../assets/images/dashboard/isci-cizim.png")}
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="iceriks">
                <div>
                  <img
                    className="icerik-resim-2"
                    src={require("../../assets/images/dashboard/zaman-kazanmak.png")}
                    alt=""
                  ></img>
                </div>
                <div>
                  <div className="icerik-baslik-2">Zamandan Kazan</div>
                  <div className="icerik-2">
                    Aradığın hizmet için dükkan dükkan dolaşmak ya da aracı
                    aramakla uğraşmayın. Siz isteğinizi belirtin biz size
                    seçdirelim.
                  </div>
                </div>
              </div>

              <div className="iceriks">
                <div>
                  <div className="icerik-baslik-1">İşini Garantiye Al</div>
                  <div className="icerik-1">
                    Gönül rahatlığıyla hizmet almanız için işleriniz garantimiz
                    altındadır. Güvenli ve kaliteli çalışma herkesin hakkıdır.
                  </div>
                </div>
                <div>
                  <img
                    className="icerik-resim-1"
                    src={require("../../assets/images/dashboard/shaking-hands.png")}
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="iceriks">
                <div>
                  <img
                    className="icerik-resim-2"
                    src={require("../../assets/images/dashboard/laptop.png")}
                    alt=""
                  ></img>
                </div>
                <div>
                  <div className="icerik-baslik-2">Kolayca Kullan</div>
                  <div className="icerik-2">
                    Hizmet almak istediğiniz ürünü seçin ve adımları kolayca
                    izleyin, bekleyen işlerinizi hızlıca halledin.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InfoDataCount />
          <Footer />
        </div>
      ) : null}
    </div>
  );
};
export default slider;
