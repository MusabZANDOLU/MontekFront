import { useState, useEffect } from "react";
import { AuthLocalStorage } from "../localStorage";
import { BASE_URL } from "../../base";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Dashboard/Navbar";
import svgCheck from "../../assets/svg/giveOffer/svgCheck.svg";
import "../../assets/scss/giveOffer.scss";
import "react-calendar/dist/Calendar.css";

const GiveOffer = () => {
  const { accessToken, id } = AuthLocalStorage();
  const [cardShow, setCardShow] = useState(false);
  const [offers, setOffers] = useState([]);
  // const [radioButtons, setRadioButtons] = useState();

  const toggleDownOrUp = () => {
    setCardShow(!cardShow);
  };

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
  // TODO: Arama kısmı yapılacak
  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
          <div className="giveOfferAll">
            <div className="topAreaGiveOfferPage">
              <button className="btnHideOffer" onClick={toggleDownOrUp}>
                {!cardShow
                  ? "Verilmiş Teklifleri Gizle"
                  : "Tüm Teklifleri Göster"}
              </button>
              {/* <div className="topInputCover">
                <input
                  className="searchOffer"
                  type="text"
                  placeholder={
                    radioButtons
                      ? "Arama Kriterinizi Yazınız"
                      : "Hangi Tür Filtreleme Yapacaksanız Seçiniz"
                  }
                />
                <div>MüşteriAdı</div>
                <input
                  className="radioBtnForSearc"
                  type="radio"
                  name="radioButoon"
                  value="a"
                  onChange={e => {
                    setRadioButtons(e.target.value);
                  }}
                />
                <div>Ürün Adı</div>
                <input
                  className="radioBtnForSearc"
                  type="radio"
                  name="radioButoon"
                  value="b"
                  onChange={e => {
                    setRadioButtons(e.target.value);
                  }}
                />
                <button>ara</button>
              </div> */}
            </div>
            <div className="giveOfferAllCard">
              {offers
                .slice(0)
                .reverse()
                .map(offer => (
                  <form
                    className={
                      offer.firmIdList.find(e => e === id) && cardShow
                        ? "none"
                        : "giveOfferCard"
                    }
                    key={offer._id}
                  >
                    <div className="giveOfferCardInUser">
                      {offer.userName} {offer.userSurName}
                    </div>
                    <hr />
                    <div className="giveOfferCardIn">{offer.productName}</div>
                    <div className="giveOfferCardIn">
                      {offer.createdAt.slice(0, 10)}
                    </div>
                    <div className="giveOfferCardIn">
                      {offer.firmIdList.find(o => o === id)
                        ? "Teklif Verildi"
                        : "Teklif Verilmedi"}
                    </div>
                    <div className="giveOfferLinkCenter">
                      <Link
                        className={
                          offer.firmIdList.find(o => o === id)
                            ? "giveOfferLinkEnable"
                            : "giveOfferLink"
                        }
                        to={`/giveOffer/detail/${offer._id}`}
                      >
                        Teklif Ver
                      </Link>
                      <img
                        className={
                          offer.firmIdList.find(o => o === id)
                            ? "svgGiveOffer"
                            : "svgGiveOfferEnable"
                        }
                        src={svgCheck}
                        alt=""
                      />
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
