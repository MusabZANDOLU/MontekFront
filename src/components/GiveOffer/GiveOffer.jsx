import { useState, useEffect } from "react";
import { AuthLocalStorage } from "../localStorage";
import { BASE_URL } from "../../base";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Dashboard/Navbar";
import alertify from "alertifyjs";
import svgCheck from "../../assets/svg/giveOffer/svgCheck.svg";
import "../../assets/scss/giveOffer.scss";
import "react-calendar/dist/Calendar.css";
import upRowSvg from "../../assets/svg/giveOffer/upRowSvg.svg";
import downRowSvg from "../../assets/svg/giveOffer/downRowSvg.svg";
import showOfferSvg from "../../assets/svg/giveOffer/svgShowOffer.svg";
import hideOfferSvg from "../../assets/svg/giveOffer/svgHideOffer.svg";
import searchSvg from "../../assets/svg/giveOffer/svgSearchOffer.svg";

const GiveOffer = () => {
  const { accessToken, id } = AuthLocalStorage();
  const [cardShow, setCardShow] = useState(false);
  const [offers, setOffers] = useState([]);
  // const [productArray, setProductArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [radioButtons, setRadioButtons] = useState("default");
  const [selectedCity, setSelectedCity] = useState();
  const [cities, setCities] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getOffer();
    getUser();
    getCitiesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDownOrUp = () => {
    // alertify.set('notifier','Teklif Verilmiş Olanlar Gizlendi');
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

  const getOffer = async () => {
    await axios
      .get(`${BASE_URL}/offers/allOffer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
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

  // const getProductName = async () => {
  //   await axios
  //     .get(`${BASE_URL}/offers/productName`, {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then(res => {
  //       setProductArray(res.data);
  //     });
  // };

  return (
    <div>
      <Navbar />
      <div className="giveFlexAll">
        <div className="leftContainerGive">
          <div className="giveOfferAll">
            <div className="topAreaGiveOfferPage">
              {/* <button onClick={getProductName}>getir</button> */}
              <div className="topInputCover">
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
                  className="selectUserName"
                  onChange={e => setRadioButtons(e.target.value)}
                >
                  <option defaultValue={true} value="0">
                    Tüm Müşteriler
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
                  className="selectUserName"
                  onChange={e => setSelectedCity(e.target.value)}
                >
                  <option defaultValue={true} value="0">
                    Tüm Şehirler
                  </option>
                  {cities.map(allcities => (
                    <option key={allcities._id} value={allcities.name}>
                      {allcities.name.toLocaleUpperCase()}
                    </option>
                  ))}
                </select>
                <select className="selectUserName">
                  <option defaultValue={true} value="0">
                    Tüm Ürünler
                  </option>
                  <option>Katlanır Cam</option>
                  <option>Sürme Cam</option>
                  <option>Plastik Pencere & Kapı</option>
                  <option>Alüminyum Kapı & Pvc</option>
                </select>
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
              {
                // radioButtons === "default"
                //   ?
                offers
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
                  ))
                // : "yok yok"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOffer;
