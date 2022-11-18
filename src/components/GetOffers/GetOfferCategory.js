import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/getOfferCategory.scss";

const GetOfferCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="categoryAllContent">
      <Navbar />

      <div className="categoryTitle">
        {" "}
        Montaj yaptırmak istediğiniz yer için seçim yapınız.
      </div>
      <div className="cards-list">
        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/foldingWindow">
            <div className="card 1">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categoryKatlanir.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">
            BALKON KAPATMA <br />
            ÜRÜNLERİ
          </div>
        </div>

        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/pvc">
            <div className="card 2">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categoryPvc.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">
            PVC CAM & KAPI <br />
            ÜRÜNLERİ
          </div>
        </div>

        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/shopping">
            <div className="card 4">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categoryMagaza.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">
            MAĞAZA CAM & KAPI <br />
            ÜRÜNLERİ
          </div>
        </div>

        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/showerBox">
            <div className="card 3">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categoryDusakabin.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">DUŞ KABİNİ ÜRÜNLERİ</div>
        </div>

        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/swatter">
            <div className="card 4">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categorySineklik.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">SİNEKLİK ÜRÜNLERİ</div>
        </div>

        <div className="categoryCardOne">
          <Link className="linkText" to="/getOffer/aluminumHandrail">
            <div className="card 4">
              <div className="card_image">
                <img
                  src={require("../../assets/images/category/categoryKorkuluk.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </Link>
          <div className="cardText">ALÜMİNYUM KORKULUK</div>
        </div>
      </div>
    </div>
  );
}
export default GetOfferCategory;
