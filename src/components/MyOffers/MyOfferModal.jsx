import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import AuthLocalStorage from "../localStorage";
import { BASE_URL } from "../../base";
import { useParams } from "react-router-dom";
import moment from "moment";
import alertify from "alertifyjs";

const MyOfferModal = () => {
  const { accessToken, id } = AuthLocalStorage();
  const [currentOffer, setCurrentOffer] = useState({});
  const [companies, setCompanies] = useState([]);
  const [mineGiveOffers, setMineGiveOffer] = useState([]);
  const [myOffer, setMyOffer] = useState([]);
  const params = useParams();
  const urlId = params.id + id;

  let myDate = myOffer.createdAt;
  myDate = moment().format("L");

  // let lastDate = currentOffer.lastDate;
  // lastDate = moment().format("L");

  useEffect(() => {
    window.scrollTo(0, 0);
    getGiveOfferWidthId();
    getMyOfferById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillOffer = offer => {
    setCurrentOffer(offer);
  };

  const getGiveOfferWidthId = async () => {
    await axios
      .get(`${BASE_URL}/giveoffers/mine/${urlId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setMineGiveOffer(res.data);
      });
  };

  const getMyOfferById = async () => {
    await axios
      .get(`${BASE_URL}/Offers/${params.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setMyOffer(res.data);
      });
  };

  const deletedGiveOffer = async e => {
    console.log(currentOffer._id);
    // e.preventDefault();
    // try {
    //   await axios
    //     .delete(`${BASE_URL}/giveOffers/${currentOffer.id}`, {
    //       headers: { Authorization: `Bearer ${accessToken}` },
    //     })
    //     .then(res => {
    //       window.location.reload(false);
    //     });
    //   console.log(e);
    // } catch (error) {
    //   console.log(error);
    //   // updateUnsuccessful();
    // }
  };

  const alertt = async firmId => {
    const response = await axios.get(`${BASE_URL}/companies/${firmId}`);
    setCompanies(response.data);

    if (!alertify.myAlert) {
      alertify.dialog("myAlert", function () {
        return {
          main: function (message) {
            this.message = message;
          },
          setup: function () {
            return {
              buttons: [{ text: "Tamam", key: 27 /*Esc*/ }],
              focus: { element: 0 },
            };
          },
          prepare: function () {
            this.setContent(this.message);
          },
        };
      });
    }
    alertify.myAlert("adı :" + companies.firmName);
  };

  return (
    <div className="myOfferBody">
      <Navbar />

      {mineGiveOffers && mineGiveOffers.length === 0 ? (
        <div className="myOfferTopTextNull">
          Henüz teklifinize dönüş yapılmamıştır.
          <br />
          En kısa zamanda firmalarımız size dönüş yapacaklardır.
          <br />
          Sizin için burada listeleyeceğiz.
        </div>
      ) : (
        <div className="myOfferTopText">
          <div className="topCardContent">
            <div className="topCardInfoB">{myDate}</div>
            <div className="topCardInfo">tarihli</div>
            <div className="topCardInfoB">{myOffer.productName}</div>
            <div className="topCardInfo">ürünü için gelen teklifleriniz.</div>
          </div>
        </div>
      )}
      <hr />

      <div className="myOfferAllModal">
        {mineGiveOffers.map(getGiveOffer => (
          <div
            onClick={() => {
              fillOffer(getGiveOffer);
            }}
            className="radiogroupMyOffer"
            key={getGiveOffer._id}
          >
            <div className="giveOfferCover">
              <div>
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">Firma Adı:</div>
                  <div className="labelMyOfferRight">
                    {getGiveOffer.firmName}
                  </div>
                </div>
                <hr />
                <div className="myOfferComp">
                  <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                  <div className="labelMyOfferRight">
                    {getGiveOffer.comment}
                  </div>
                </div>
                <hr />
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                  <div className="labelMyOfferRightPrice">
                    {getGiveOffer.price} TL
                  </div>
                </div>
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">
                    Son Teklif Geçerlilik Tarihi:
                  </div>
                  <div className="labelMyOfferRightPrice">
                    {getGiveOffer.lastDate}
                  </div>
                </div>
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">
                    İşin Tahmini Bitme Süresi
                  </div>
                  <div className="labelMyOfferRightPrice">
                    {getGiveOffer.endingDay} Gün
                  </div>
                </div>
                <div className="myOfferBtnContent">
                  <button
                    onClick={e => alertt(getGiveOffer.firmId)}
                    className="myOfferBtnLeft"
                  >
                    Firma İletişim
                  </button>
                  <button onClick={deletedGiveOffer} className="myOfferBtnMid">
                    Sil
                  </button>
                  <button className="myOfferBtnRight">Anlaş</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOfferModal;
