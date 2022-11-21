import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../base.js";
import axios from "axios";
import AuthLocalStorage from "../localStorage";
import moment from "moment";
// import Navbar from "../Dashboard/Navbar";

const GiveOfferDetail = () => {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [productName, setProductName] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [window, setWindow] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();
  const { accessToken } = AuthLocalStorage();
  const params = useParams();

  let myDate = date;
  myDate = moment().format("LL");

  useEffect(() => {
    getOfferDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getOfferDetail() {
    const response = await axios.get(`${BASE_URL}/offers/${params.id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setName(response.data.userName);
    setSurname(response.data.userSurName);
    setProductName(response.data.productName);
    setWidth(response.data.productWidth);
    setHeight(response.data.productHeight);
    setWindow(response.data.productWindow);
    setPlace(response.data.productPlace);
    setDate(response.data.createdAt);
    setComment(response.data.userComment);
  }

  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="allDetailPage">
        {/* <Link to="/giveOffer">
          <img className="svgNavbar" src={svgHome} alt="" />
        </Link> */}
        <div className="detailPageCover">
          <div className="detailPageLeft">
            <div className="detailName">Yapılacak İş</div>
            <div className="detailCostumerName">
              <div className="detailCostumerNameTitle">Müşteri: </div>
              <div>
                {name} {surName}
              </div>
            </div>
            <div className="detailProductName">
              <div className="detailCostumerNameTitle">Ürün: </div>
              <div>{productName}</div>
            </div>
            <div className="detailContent">
              <div className="detailCostumerNameTitle">Diğer Detaylar</div>
              <hr />
              <div className="flexDetailContent">
                <div className="detailContentLeft">
                  <div>{width}</div>
                  <div>{height}</div>
                  <div>{window}</div>
                </div>
                <div className="detailContentRight">
                  <div>{place}</div>
                  <div>{myDate}</div>
                </div>
              </div>
            </div>
            <div className="detailComment">
              <div className="detailCostumerNameTitle">Müşteri Açıklaması</div>
              <hr />
              <div className="commentDetailText">{comment}</div>
            </div>
          </div>
          <div className="detailPageRight">
            <div className="detailNameCenter">
              <div className="detailName">Verilecek Teklif</div>
            </div>
            <div>
              <div>
                <textarea
                  className="offerGiveDetailTextArea"
                  placeholder="Teklif için yazılacak açıklama..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <input
                  className="offerGiveDetailText"
                  placeholder="Teklif için yazılacak fiyat ya da fiyat aralığı. (Fiyatlandırmada kur belirtiniz!)"
                ></input>
              </div>
              <div className="dayCountClass">
                <div className="flexCalendar">
                  <div className="finishText">İşin bitme süresi: </div>
                  <div>
                    <button className="btnCount" onClick={reset}>
                      x
                    </button>
                    <button className="btnCount" onClick={decrease}>
                      -
                    </button>
                    <button className="btnCount" onClick={increase}>
                      +
                    </button>
                  </div>
                  <div className="countNumber">
                    {counter > -1 ? counter : "0 olamaz"} gün
                  </div>
                </div>
                <input type="date" required className="dateDetail"></input>
              </div>
            </div>
            <div className="detailDownButton">
              <button className="btnGiveGetBack">
                <Link className="btnGiveGetBackLink" to="/giveOffer">
                  İptal
                </Link>
              </button>
              <button className="btnGiveDetailPost">Teklifi Gönder</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveOfferDetail;
