import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Dashboard/Footer";
import Navbar from "../Dashboard/Navbar";
import AuthLocalStorage from "../localStorage";
import "../../assets/scss/products.scss";

function Products() {
  const { isLogin, type } = AuthLocalStorage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products-all-content">
        <div className="products-text">Tüm Ürünlerimiz</div>
        <hr />
        <div className="product-cover">
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/pvc"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/pvc.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">PVC Cam & Kapı</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Kalınlığı</div>
                  <div className="product-contnt">70mm</div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Düz, Damlacık Kanat</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/pvc"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/foldingWindow"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/surme-sistemleri.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">
                    Katlanır & Sürme Cam Modelleri
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Malzemesi</div>
                  <div className="product-contnt">Alüminyum</div>
                </div>
                <div className="borders">
                  <div className="product-title">Cam Rengi</div>
                  <div className="product-contnt">
                    Şeffaf, Füme, Aynalı, Buzlu
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Bronz, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/foldingWindow"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/pvc"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/volkswagen.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">
                    Volkswagen & Sürme Kapı Modelleri
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Kalınlığı</div>
                  <div className="product-contnt">70mm</div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Düz, Damlacık Kanat</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/pvc"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/pvc"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/celik-kapilar.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">
                    Çelik Kapı Modelleri
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Malzemesi</div>
                  <div className="product-contnt">
                    Alüminyum, Kompozit Kaplama
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Düz</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/pvc"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/shopping"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/panjur-kepeng.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">
                    Otomatik Panjur & Kepeng Modelleri
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Malzemesi</div>
                  <div className="product-contnt">Alüminyum ,Çelik</div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Sarmal</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">Beyaz, Gri</div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/shopping"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/showerBox"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/dusakabin.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">Duşakabin Modelleri</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Kalınlığı</div>
                  <div className="product-contnt">Değişken</div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Değişken</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/showerBox"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/shopping"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/otokapi.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">
                    Otomatik Kapı Modelleri
                  </div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Kalınlığı</div>
                  <div className="product-contnt">Değişken</div>
                </div>
                <div className="borders">
                  <div className="product-title">Kayıt Şekli</div>
                  <div className="product-contnt">Düz</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">Beyaz, Gri</div>
                </div>
              </div>
              <hr />
              <div className="prod-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/shopping"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
          <div className="products-all-table">
            <div className="product-sttng">
              <Link
                to={
                  isLogin && type === "user"
                    ? "/getOffer/swatter"
                    : isLogin && type === "company"
                      ? "/"
                      : "/login"
                }
              >
                <img
                  className="product-logo"
                  src={require("../../assets/images/product/sineklik.png")}
                  alt=""
                />
              </Link>
              <div className="prdct-text">
                <div className="borders">
                  <div className="product-name">Ürün Adı</div>
                  <div className="product-name-contnt">Sineklik Modelleri</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Tipi</div>
                  <div className="product-contnt">Sabit, Plise, Sarhoş</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Kalınlığı</div>
                  <div className="product-contnt">Değişken</div>
                </div>
                <div className="borders">
                  <div className="product-title">Ürün Renkleri</div>
                  <div className="product-contnt">
                    Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri
                  </div>
                </div>
              </div>
              <hr />
              <div className="comp-url">
                Ürünle ilgili teklif almak için
                <Link
                  to={
                    isLogin && type === "user"
                      ? "/getOffer/swatter"
                      : isLogin && type === "company"
                        ? "/"
                        : "/login"
                  }
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
                tıklayınız
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Products;
