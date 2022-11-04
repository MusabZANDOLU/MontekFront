import React, { useState, useEffect } from "react";
import AuthLocalStorage from "../localStorage";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import moment from "moment";
import "../../assets/scss/giveOffer.scss";

const GiveOfferMinePage = () => {
  const [offers, setOffers] = useState([]);
  const [currentOffer, setCurrentOffer] = useState({});
  const { accessToken, id } = AuthLocalStorage();

  let myDate = currentOffer.lastDate;
  myDate = moment().format("DD MM YYYY");

  useEffect(() => {
    getGiveOfferById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGiveOfferById = async () => {
    await axios
      .get(`https://montekserver.herokuapp.com/giveOffers/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  // const deletedGiveOffer = async e => {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .delete(
  //         `http://localhost:5000/giveOffers/${currentOffer.id}`,
  //         { headers: { Authorization: `Bearer ${accessToken}` } }
  //       )
  //       .then(res => {
  //         // updateSuccessful();
  //       });
  //     console.log(e);
  //   } catch (error) {
  //     console.log(error);
  //     // updateUnsuccessful();
  //   }
  // };

  const showOfferModal = offer => {
    setCurrentOffer(offer);
  };

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
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
                    Müşteri: {currentOffer.userName} {offer.firmSurName}
                  </div>
                  <hr />
                  <div className="giveOfferCardIn">{offer.comment}</div>
                  <div className="giveOfferCardIn">{offer.price}</div>
                  <div className="giveOfferCardIn">T.V.T {offer.createdAt}</div>
                  <div className="giveOfferCardIn">T.G.T: {myDate}</div>
                  <div
                    className="giveOfferDeleteIcon"
                    // onClick={deletedGiveOffer}
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
