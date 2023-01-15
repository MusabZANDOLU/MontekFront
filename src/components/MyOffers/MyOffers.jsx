import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../base";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
// import moment from "moment";
import AuthLocalStorage from "../localStorage";
import svgTrash from "../../assets/svg/myOffer/svgTrash.svg";
import "../../assets/scss/myOffers.scss";

const MyOffers = () => {
  const [myOffers, setMyOffer] = useState([]);
  const { accessToken } = AuthLocalStorage();

  // let myDate = myOffers.createdAt;
  // myDate = moment().format("LL");

  useEffect(() => {
    getMyOffer();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletedOffer = async deleteOfferId => {
    await axios
      .delete(`${BASE_URL}/Offers/${deleteOfferId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        window.location.reload(false);
      });
  };

  const getMyOffer = async () => {
    await axios
      .get(`${BASE_URL}/Offers`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setMyOffer(res.data);
      });
  };

  return (
    <div className="myOfferBody">
      <Navbar />
      {myOffers && myOffers.length === 0 ? (
        <div className="myOfferTopText">
          Henüz teklifiniz bulunmamaktadır.
          <br />
          Teklif Al sekmemizden kolayca teklif işleminizi
          gerçekleştirebilirsiniz.
        </div>
      ) : (
        <div className="myOfferTopText">Tüm teklifleriniz</div>
      )}

      <div className="myOfferAll">
        {myOffers.map(getOffers => (
          <div className="radiogroupMyOffer" key={getOffers._id}>
            <div>
              <div>
                <div className="myOfferAllCol">
                  <div className="myOfferLeftCol">
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          Ürün:
                          <br />
                          <hr />
                          {getOffers.productName}
                        </div>
                      </label>
                    </div>
                    <br />
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          Detaylar:
                          <br />
                          <hr />
                          {getOffers.productWidth}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          {getOffers.productHeight}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          {getOffers.productPlace}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          {getOffers.productWindow}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="myOfferRightCol">
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          Açıklamam:
                          <hr />
                          {getOffers.userComment}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          <br />
                          İl-İlçe:
                          <hr />
                          {getOffers.town ? getOffers.town : null}{" "}
                          {getOffers.city
                            ? "/" + getOffers.city.toLocaleUpperCase()
                            : "Belirtilmemiş"}
                        </div>
                      </label>
                    </div>
                    <br />
                    <div>
                      <label className="label">
                        <div className="textGiveOfferCss">
                          Teklif Tarihim:
                          <br />
                          <hr />
                          {/* {myDate} */}
                          {getOffers.createdAt}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="downButtons">
                  <div className="myOfferDetailBtn">
                    <Link to={`/offer/mine/${getOffers._id}`}>
                      <button className="myOfferBtn">Gelen tekliflerim.</button>
                    </Link>
                  </div>
                  <button
                    className="myOfferDeleteBtn"
                    onClick={e => deletedOffer(getOffers._id)}
                  >
                    <img className="spaceToIcon" src={svgTrash} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyOffers;
