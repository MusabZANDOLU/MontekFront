import { useState, useEffect } from "react";
import { AuthLocalStorage } from "../localStorage";
import { BASE_URL } from "../../base";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Dashboard/Navbar";
import alertify from "alertifyjs";
import svgCheck from "../../assets/svg/giveOffer/svgCheck.svg";
import upRowSvg from "../../assets/svg/giveOffer/upRowSvg.svg";
import downRowSvg from "../../assets/svg/giveOffer/downRowSvg.svg";
import showOfferSvg from "../../assets/svg/giveOffer/svgShowOffer.svg";
import hideOfferSvg from "../../assets/svg/giveOffer/svgHideOffer.svg";
import "../../assets/scss/giveOffer.scss";
import "react-calendar/dist/Calendar.css";

const GiveOffer = () => {
  const { accessToken, id } = AuthLocalStorage();
  const [offers, setOffers] = useState([]);
  const [offersByUserName, setOffersByUserName] = useState([]);
  const [offersByCities, setOffersByCities] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [cities, setCities] = useState([]);
  const [radioButtons, setRadioButtons] = useState("default");
  const [selectedCity, setSelectedCity] = useState();
  const [showFilter, setShowFilter] = useState(true);
  const [cardShow, setCardShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getOffer();
    getUser();
    getCitiesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDownOrUp = () => {
    setCardShow(!cardShow);
    alertify.success(
      !cardShow ? "Verilen Teklifler Gizlendi" : "Tüm Teklifler Gösterilecek"
    );
  };

  const toggleShowOrHideDiv = () => {
    setShowFilter(!showFilter);
  };

  const getCitiesInfo = async () => {
    const response = await axios.get(`${BASE_URL}/getOffer/getCities`);
    setCities(response.data);
  };

  const getUser = async () => {
    await axios
      .get(`${BASE_URL}/users`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setUsersArray(res.data);
      });
  };

  const getOffer = async () => {
    await axios
      .get(`${BASE_URL}/offers/allOffer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  const getOfferByUserName = async () => {
    await axios
      .get(`${BASE_URL}/offers/userName/${radioButtons}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffersByUserName(res.data);
      });
    toggleShowOrHideDiv(); //Filtre alanı kapanması için
  };

  const getOfferByCities = async () => {
    await axios
      .get(`${BASE_URL}/offers/cities/${selectedCity}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffersByCities(res.data);
      });
    toggleShowOrHideDiv();
  };

  const getFilterFunction = async () => {
    if (radioButtons !== "default" && radioButtons) {
      getOfferByUserName();
    } else if (selectedCity) {
      getOfferByCities();
    }
  };

  const refreshAllFlter = async () => {
    window.location.reload(false);
  };

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
          <div className="giveOfferAll">
            <div className="topInputCover">
              <div className="topInfoText">{radioButtons === 'default' ? 'Tüm Listeler' : radioButtons !== 'default' ? 'Seçilen Müşterinin Listeleri' : null}</div>
              <button
                onClick={toggleShowOrHideDiv}
                className="selectFilterButton"
              >
                {showFilter ? "Filtrele" : "Filtrelemeyi Kapat"}
                <img
                  className="svgFilter"
                  src={!showFilter ? upRowSvg : downRowSvg}
                  alt=""
                />
              </button>
            </div>
            <div className={showFilter ? "filterDivHide" : "filterDivShow"}>
              <div className="filterAreaLeft">
                <button className="btnHideOffer" onClick={toggleDownOrUp}>
                  {!cardShow
                    ? "Verilmiş Teklifleri Gizle"
                    : "Tüm Teklifleri Göster"}{" "}
                  <img
                    className="svgFilter"
                    src={cardShow ? showOfferSvg : hideOfferSvg}
                    alt=""
                  />
                </button>
              </div>
              <div className="filterAreaRight">
                <select
                  className={
                    selectedCity && selectedCity !== "allCitiesForSelect"
                      ? "selectUserName noneClass"
                      : "selectUserName"
                  }
                  onChange={e => setRadioButtons(e.target.value)}
                >
                  <option defaultValue={true} value="allCustomers">
                    Müşteri Seçiniz
                  </option>
                  {usersArray.map(user => (
                    <option key={user._id} value={user._id}>
                      {user.name.toLocaleUpperCase() +
                        " " +
                        user.surName.toLocaleUpperCase()}
                    </option>
                  ))}
                </select>
                <select
                  className={
                    radioButtons &&
                    radioButtons !== "default" &&
                    radioButtons !== "allCustomers"
                      ? "selectUserName noneClass"
                      : "selectUserName"
                  }
                  onChange={e => setSelectedCity(e.target.value)}
                >
                  <option defaultValue={true} value="allCitiesForSelect">
                    Şehir Seçiniz
                  </option>
                  {cities.map(allcities => (
                    <option key={allcities._id} value={allcities.name}>
                      {allcities.name.toLocaleUpperCase()}
                    </option>
                  ))}
                </select>
                <button onClick={getFilterFunction} className="selectUserName">
                  Arama Yap
                </button>
                <button className="selectUserName" onClick={refreshAllFlter}>
                  Filtreyi temizle
                </button>
              </div>
            </div>
            <div
              id="giveOfferAllCardId"
              className={
                showFilter
                  ? "giveOfferAllCard"
                  : "giveOfferAllCard hideGiveOfferAllCard"
              }
            >
              {radioButtons === "default"
                ? offers
                    .slice(0)
                    .reverse()
                    .map(offer => (
                      <form
                        key={offer._id}
                        className={
                          offer.firmIdList.find(e => e === id) && cardShow
                            ? "none"
                            : "giveOfferCard"
                        }
                      >
                        <div className="giveOfferCardInUser">
                          {offer.userName} {offer.userSurName}
                        </div>
                        <hr />
                        <div className="giveOfferCardIn">
                          {offer.productName}
                        </div>
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
                    ))
                : radioButtons &&
                  radioButtons !== "default" &&
                  (selectedCity === "allCitiesForSelect" || !selectedCity)
                ? offersByUserName
                    .slice(0)
                    .reverse()
                    .map(offersByUserName => (
                      <form
                        key={offersByUserName._id}
                        className={
                          offersByUserName.firmIdList.find(e => e === id) &&
                          cardShow
                            ? "none"
                            : "giveOfferCard"
                        }
                      >
                        <div className="giveOfferCardInUser">
                          {offersByUserName.userName}{" "}
                          {offersByUserName.userSurName}
                        </div>
                        <hr />
                        <div className="giveOfferCardIn">
                          {offersByUserName.productName}
                        </div>
                        <div className="giveOfferCardIn">
                          {offersByUserName.createdAt.slice(0, 10)}
                        </div>
                        <div className="giveOfferCardIn">
                          {offersByUserName.firmIdList.find(o => o === id)
                            ? "Teklif Verildi"
                            : "Teklif Verilmedi"}
                        </div>
                        <div className="giveOfferLinkCenter">
                          <Link
                            className={
                              offersByUserName.firmIdList.find(o => o === id)
                                ? "giveOfferLinkEnable"
                                : "giveOfferLink"
                            }
                            to={`/giveOffer/detail/${offersByUserName._id}`}
                          >
                            Teklif Ver
                          </Link>
                          <img
                            className={
                              offersByUserName.firmIdList.find(o => o === id)
                                ? "svgGiveOffer"
                                : "svgGiveOfferEnable"
                            }
                            src={svgCheck}
                            alt=""
                          />
                        </div>
                      </form>
                    ))
                : selectedCity &&
                  selectedCity !== "allCitiesForSelect" &&
                  (radioButtons === "default" ||
                    radioButtons === "allCustomers")
                ? offersByCities
                    .slice(0)
                    .reverse()
                    .map(offersByUserName => (
                      <form
                        key={offersByUserName._id}
                        className={
                          offersByUserName.firmIdList.find(e => e === id) &&
                          cardShow
                            ? "none"
                            : "giveOfferCard"
                        }
                      >
                        <div className="giveOfferCardInUser">
                          {offersByUserName.userName}{" "}
                          {offersByUserName.userSurName}
                        </div>
                        <hr />
                        <div className="giveOfferCardIn">
                          {offersByUserName.productName}
                        </div>
                        <div className="giveOfferCardIn">
                          {offersByUserName.createdAt.slice(0, 10)}
                        </div>
                        <div className="giveOfferCardIn">
                          {offersByUserName.firmIdList.find(o => o === id)
                            ? "Teklif Verildi"
                            : "Teklif Verilmedi"}
                        </div>
                        <div className="giveOfferLinkCenter">
                          <Link
                            className={
                              offersByUserName.firmIdList.find(o => o === id)
                                ? "giveOfferLinkEnable"
                                : "giveOfferLink"
                            }
                            to={`/giveOffer/detail/${offersByUserName._id}`}
                          >
                            Teklif Ver
                          </Link>
                          <img
                            className={
                              offersByUserName.firmIdList.find(o => o === id)
                                ? "svgGiveOffer"
                                : "svgGiveOfferEnable"
                            }
                            src={svgCheck}
                            alt=""
                          />
                        </div>
                      </form>
                    ))
                : // "oldu"
                  "olmadı"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOffer;
