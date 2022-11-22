import React, { useState, useEffect } from "react";
import AuthLocalStorage from "../localStorage";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import moment from "moment";
import "../../assets/scss/giveOffer.scss";
import { BASE_URL } from "../../base.js";

const GiveOfferMinePage = () => {
  const [offers, setOffers] = useState([]);
  const [currentOffer, setCurrentOffer] = useState({});
  const { accessToken, id } = AuthLocalStorage();

  let myDate = currentOffer.lastDate;
  myDate = moment().format("DD MM YYYY");

  useEffect(() => {
    window.scrollTo(0, 0);
    getGiveOfferById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGiveOfferById = async () => {
    await axios
      .get(`${BASE_URL}/giveOffers/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  const deletedGiveOffer = async e => {
    e.preventDefault();
    try {
      await axios
        .delete(`${BASE_URL}/giveOffers/${currentOffer.id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(res => {
          window.location.reload(false);
        });
      console.log(e);
    } catch (error) {
      console.log(error);
      // updateUnsuccessful();
    }
  };

  const showOfferModal = offer => {
    setCurrentOffer(offer);
  };

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
        {offers && offers.length === 0 ? (
        <div className="giveOfferTopText">
          Henüz teklifiniz bulunmamaktadır.
          <br />
          Sizden dönüş bekleyen müşterilerimize teklif ver sekmemizden kolayca teklif verebilirsiniz.
        </div>
      ) : (
        <div className="giveOfferTopText">Tüm teklifleriniz</div>
      )}
          <div className="giveOfferAll">
            <div className="giveOfferAllCard">
              {offers.map(offer => (
                <div
                  className="giveOfferCard"
                  key={offer._id}
                  onClick={() => {
                    showOfferModal(offer);
                  }}
                >
                  <div className="giveOfferCardIn">
                    Müşteri: {offer.firmName} {offer.firmSurName}
                  </div>
                  <hr />
                  <div className="giveOfferCardIn">{offer.comment}</div>
                  <div className="giveOfferCardIn">{offer.price}</div>
                  <div className="giveOfferCardIn">{offer.createdAt}</div>
                  <div className="giveOfferCardIn">{myDate}</div>
                  <div
                    className="giveOfferDeleteIcon"
                    onClick={deletedGiveOffer}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOfferMinePage;
