import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../base.js";
import AuthLocalStorage from "../localStorage";
import moment from "moment";
import axios from "axios";
import svgCheckFill from "../../assets/svg/myOffer/svgCheck.svg";
import svgCheckNull from "../../assets/svg/myOffer/svgChechNull.svg";
import alertify from "alertifyjs";

const alertSuccess = () => {
  alertify.alert(
    "Teklif Verme Hakkında",
    "Teklifinizi müşterimize ilettik. Daha çok iş yapmanız dileğiyle, iyi çalışmalar."
  );
};
const GiveOfferDetail = () => {
  const { accessToken, id, name, surName } = AuthLocalStorage();
  const [offerId, setOfferId] = useState();
  const [offerUserid, setOfferUserid] = useState();
  const [nameCustomer, setNameCustomer] = useState();
  const [surNameCustomer, setSurnameCustomer] = useState();
  const [companyComment, setCompanyComment] = useState();
  const [price, setPrice] = useState();
  const [comment, setComment] = useState();
  const [todoDate, setTodoDate] = useState();
  const [productName, setProductName] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [window, setWindow] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();
  const [endDay, setEndDay] = useState();
  const [city, setCity] = useState();
  const [town, setTown] = useState();
  const [counter, setCounter] = useState(1);
  const [cardShow, setCardShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOfferDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let myDate = date;
  myDate = moment().format("LL");

  const toggleDownOrUp = () => {
    setCardShow(!cardShow);
  };

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };

  const reset = () => {
    setCounter(1);
  };

  async function getOfferDetail() {
    const response = await axios.get(`${BASE_URL}/offers/${params.id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setOfferUserid(response.data.userId);
    setOfferId(response.data._id);
    setNameCustomer(response.data.userName);
    setSurnameCustomer(response.data.userSurName);
    setProductName(response.data.productName);
    setWidth(response.data.productWidth);
    setHeight(response.data.productHeight);
    setWindow(response.data.productWindow);
    setPlace(response.data.productPlace);
    setCity(response.data.city);
    setTown(response.data.town);
    setDate(response.data.createdAt);
    setComment(response.data.userComment);
  }

  const saveGiveOffer = async e => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${BASE_URL}/giveOffers/${id + offerId}`,
          {
            offersId: params.id,
            firmId: id,
            offerUserId: offerUserid,
            firmName: name + " " + surName,
            firmSurNam: surName,
            comment: companyComment,
            price: price,
            endingDay: endDay,
            isThereOffer: true,
            lastDate: todoDate,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then(alertSuccess)
        .then(() => {
          navigate("/giveOffer");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="allDetailPage">
        <div className="detailPageCover">
          <div className="detailPageLeft">
            <div className="detailName">Yapılacak İş</div>
            <div className="detailCostumerName">
              <div className="detailCostumerNameTitle">Müşteri: </div>
              <div>
                {nameCustomer} {surNameCustomer}
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
                  <div>
                    {town ? town.toLocaleUpperCase() : null}{" "}
                    {city ? "/" + city.toLocaleUpperCase() : "Belirtilmemiş"}
                  </div>
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
                  onChange={e => setCompanyComment(e.target.value)}
                  className="offerGiveDetailTextArea"
                  placeholder="Teklif için yazılacak açıklama..."
                  rows="10"
                ></textarea>
              </div>
              <div>
                <input
                  onChange={e => setPrice(e.target.value)}
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
                    {counter > 0
                      ? counter + " gün"
                      : "0'dan yüksek sayı seçmelisiniz."}
                  </div>
                  <img
                    className="checkImg"
                    onClick={e => setEndDay(counter)}
                    onClickCapture={toggleDownOrUp}
                    src={cardShow !== true ? svgCheckNull : svgCheckFill}
                    alt=""
                  />
                </div>
                <div className="lastDateWidth">
                  Teklif geçerlilik tarihi:
                  <input
                    onChange={e => setTodoDate(e.target.value)}
                    type="date"
                    required
                    className="dateDetail"
                  ></input>
                </div>
              </div>
            </div>
            <div className="detailDownButton">
              <button className="btnGiveGetBack">
                <Link className="btnGiveGetBackLink" to="/giveOffer">
                  İptal
                </Link>
              </button>
              <button className="btnGiveDetailPost" onClick={saveGiveOffer}>
                Teklifi Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveOfferDetail;
