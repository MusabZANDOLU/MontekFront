import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import AuthLocalStorage from "../localStorage";

const MyOfferModal = () => {
  const [mineGiveOffers, setMineGiveOffer] = useState([]);
  const { accessToken, id } = AuthLocalStorage();

  useEffect(() => {
    getGiveOfferWidthId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGiveOfferWidthId = async () => {
    await axios
      .get(`https://montekserver.herokuapp.com/giveoffers/mine/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setMineGiveOffer(res.data);
      });
  };

  return (
    <div className="myOfferBody">
      <Navbar />

      {mineGiveOffers && mineGiveOffers.length === 0 ? (
        <div className="myOfferTopText">
          Henüz teklifinize dönüş yapılmamıştır.
          <br />
          En kısa zamanda firmalarımız size dönüş yapacaklardır.
          <br />
          Sizin için burada listeleyeceğiz.
        </div>
      ) : (
        <div className="myOfferTopText">
          *** tarihinde teklifinde bulunduğunuz *** ürünü için verilen fiyatları
          inceliyorsunuz.<i className="fa-solid fa-bell"></i>
        </div>
      )}

      <div className="myOfferAllModal">
        {mineGiveOffers.map(getGiveOfferWidthId => (
          <div className="radiogroupMyOffer" key={getGiveOfferWidthId._id}>
            <div className="giveOfferCover">
              <div>
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">Firma Adı:</div>
                  <div className="labelMyOfferRight">
                    {" "}
                    {getGiveOfferWidthId.firmName}
                  </div>
                </div>
                <hr />
                <div className="myOfferComp">
                  <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                  <div className="labelMyOfferRight">
                    {getGiveOfferWidthId.comment}
                  </div>
                </div>
                <hr />
                <div className="myOfferTitle">
                  <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                  <div className="labelMyOfferRightPrice">
                    {getGiveOfferWidthId.price} TL
                  </div>
                </div>
                <div className="myOfferBtnContent">
                  <button className="myOfferBtn">
                    <i className="fa-solid fa-comment-dots"></i> Firma İletişimi
                  </button>
                  <i className="fa-solid fa-trash myOfferBtnDelete"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOfferModal;
