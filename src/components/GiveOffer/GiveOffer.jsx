import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
// import moment from "moment";
import { AuthLocalStorage } from "../localStorage";
import "../../assets/scss/giveOffer.scss";
import "react-calendar/dist/Calendar.css";
import { BASE_URL } from "../../base";
import { Link } from "react-router-dom";

const GiveOffer = () => {
  const [offers, setOffers] = useState([]);
  const { accessToken } = AuthLocalStorage();

  // let myDate = offers.createdAt;
  // myDate = moment().format("L");

  useEffect(() => {
    window.scrollTo(0, 0);
    getOffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOffer = async () => {
    await axios
      .get(`${BASE_URL}/offers/allOffer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  // const getGiveOffersDetail = async (ids) => {
  //   await axios
  //   .get(`${BASE_URL}/Offers/${ids}`, {
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   })
  //   .then(res => {
  //     window.location.reload(false);
  //   });
  // // setMyOffer(response.data.data);
  // };

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
          <div className="giveOfferAll">
            <div className="giveOfferAllCard">
              {offers.map(offer => (
                <form className="giveOfferCard" key={offer._id}>
                  <div className="giveOfferCardIn">
                    {offer.userName} {offer.userSurName}
                  </div>
                  <hr />
                  <div className="giveOfferCardIn">{offer.productName}</div>
                  {/* <div className="giveOfferCardIn">{myDate}</div> */}
                  <div className="giveOfferCardIn">{offer.createdAt.slice(0,10)}</div>
                  <div className="giveOfferLinkCenter">
                    <Link className="giveOfferLink" to={`/giveOffer/detail/${offer._id}`}>
                      Teklif Ver
                    </Link>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOffer;
