import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../base.js";
import AuthLocalStorage from "../localStorage";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import moment from "moment";
import "../../assets/scss/giveOffer.scss";
import svgCheckFill from "../../assets/svg/myOffer/svgCheck.svg";
import svgCheckNull from "../../assets/svg/myOffer/svgChechNull.svg";
import svgTrash from "../../assets/svg/myOffer/svgTrash.svg";

const GiveOfferMinePage = () => {
  const [offers, setOffers] = useState([]);
  const [currentOffer, setCurrentOffer] = useState({});
  const { accessToken, id } = AuthLocalStorage();
  const [cardShow, setCardShow] = useState(false);

  let myDate = currentOffer.lastDate;
  myDate = moment().format("DD MM YYYY");

  let myDateLocal = currentOffer.createdAt;
  myDateLocal = moment().format("DD MM YYYY");

  useEffect(() => {
    window.scrollTo(0, 0);
    getGiveOfferById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showOfferModal = offer => {
    setCurrentOffer(offer);
  };

  const getGiveOfferById = async () => {
    await axios
      .get(`${BASE_URL}/giveOffers/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  const toggleDownOrUp = () => {
    setCardShow(!cardShow);
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

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
          {offers && offers.length === 0 ? (
            <div className="giveOfferTopText">
              Henüz teklifiniz bulunmamaktadır.
              <br />
              Sizden dönüş bekleyen müşterilerimize "Teklif Ver" sekmemizden
              kolayca teklif verebilirsiniz.
              <br />
              Sizin için burada listeleyeceğiz.
            </div>
          ) : (
            <div className="divCheckFlex">
              <div className="giveOfferTopCheck">
                Tüm teklif detaylarını göster
              </div>
              <img
                className="checkImg"
                onClick={toggleDownOrUp}
                src={cardShow !== true ? svgCheckNull : svgCheckFill}
                alt=""
              />
            </div>
          )}
          <hr />
          <div className="giveOfferMineAll">
            {offers.map(offer => (
              <div
                className="detailMineCard"
                key={offer._id}
                onClick={() => {
                  showOfferModal(offer);
                }}
              >
                <div>
                  <div className="upTitleName">Müşteri adı gelecek</div>
                  <div className="detailCardContent">
                    <div className="detailCardContentProductName">ürün adı</div>
                    <hr />
                    <div className="detailCardContentComment">
                      {offer.comment}
                    </div>
                    <hr />
                    <div className="datePriceFlex">
                      <div>
                        <div>Teklif Tarihiniz</div>
                        <hr />
                        <div className="detailDateAndPrice">{myDateLocal}</div>
                      </div>
                      <div>
                        <div>Teklif Fiyatınız</div>
                        <hr />
                        <div className="detailDateAndPrice">{offer.price}</div>
                      </div>
                    </div>
                    {cardShow ? <hr /> : null}
                    <div
                      className={
                        cardShow ? "downOpenClass" : "downOpenClassNone"
                      }
                    >
                      <div>{myDate}</div>
                      <div>{myDate}</div>
                      <img
                        className="checkImg"
                        src={svgTrash}
                        onClick={deletedGiveOffer}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOfferMinePage;
