import { useEffect, useState } from "react";
import { BASE_URL } from "../../base";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLocalStorage from "../localStorage";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/contract.scss";
import alertify from "alertifyjs";

const alertSuccess = () => {
  alertify.alert('Anlaşma Bildirimi', 'Firmayla anlaşmanız sağlanmıştır. Teklifiniz tüm firmalarca kaldırıldı. Anlaşmalarınızı sekmesinden görebilirsiniz. Umarız hizmetimizden memnun kalmışsınızdır...');
}

const Contract = () => {
  const { accessToken } = AuthLocalStorage();
  const [offersForContract, setOffersForContract] = useState({});
  const [giveOffersForContract, setGiveOffersForContract] = useState({});
  const params = useParams();
  const offerUrlId = params.id.substring(0, 24);
  const giveOfferUrlId = params.id.substring(24, 48);
  const navigate = useNavigate();

  useEffect(() => {
    getContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContract = async allId => {
    try {
      await axios
        .get(`${BASE_URL}/Offers/${offerUrlId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(res => {
          setOffersForContract(res.data);
        });

      await axios
        .get(`${BASE_URL}/giveOffers/forContract/${giveOfferUrlId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(res => {
          setGiveOffersForContract(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const saveContract = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/contract/${offersForContract._id}`, {
        firmId: giveOffersForContract.firmId,
        userId: offersForContract.userId,
        giveOfferId: giveOffersForContract._id,
        offerId: offersForContract._id,
        userName: offersForContract.userName+" "+offersForContract.userSurName,
        firmName: giveOffersForContract.firmName,
        firmPrice: giveOffersForContract.price,
        firmComment: giveOffersForContract.comment,
        firmEndingDay: giveOffersForContract.endingDay,
        city: offersForContract.city,
        town: offersForContract.town,
      }, { headers: { Authorization: `Bearer ${accessToken}` } }).then(alertSuccess).then(()=>{
        navigate("/user/mine/contract")
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="contractAll">
        <div className="contractTitleText">MONTEK MONTAJ ANTLAŞMA SAYFASI</div>
        <div className="contractContainer">
          <div className="leftContractContainer">
            <div className="contractContainerTitle">MÜŞTERİ BİLGİLERİ</div>
            <div className="flexContainerContract">
              <div className="titles">Müşteri Id:</div>
              <div className="titlesComment">{offersForContract.userId}</div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Müşteri Adı:</div>
              <div className="titlesComment">
                {offersForContract.userName + offersForContract.userSurName}
              </div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Detaylar:</div>
              <div>
                <div className="titlesComment">
                  {offersForContract.productName} {"Genişlik " +
                    offersForContract.productWidth +
                    "   Yükseklik " +
                    offersForContract.productHeight}
                </div>
                <div className="titlesComment">
                  {"İl: " +
                    offersForContract.city +
                    "   İlçe: " +
                    offersForContract.town}
                </div>
                <div className="titlesComment">
                  Adet/Mekan: {offersForContract.productPlace}
                </div>
                <div className="titlesComment">
                  Cam Rengi: {offersForContract.productWindow}
                </div>
              </div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Açıklama:</div>
              <div className="titlesComment">
                {offersForContract.userComment}
              </div>
            </div>
          </div>
          <div className="rightContractContainer">
            <div className="contractContainerTitle">FİRMA BİLGİLERİ</div>
            <div className="flexContainerContract">
              <div className="titles">Firma Id:</div>
              <div className="titlesComment">
                {giveOffersForContract.firmId}
              </div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Firma Yetkilisi:</div>
              <div className="titlesComment">
                {giveOffersForContract.firmName}
              </div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Detaylar:</div>
              <div>
                <div className="titlesComment">
                  Fiyatlandırma: {giveOffersForContract.price}
                </div>
                <div className="titlesComment">
                  Bitirme Gün Sayısı: {giveOffersForContract.endingDay} gün
                </div>
                <div className="titlesComment">
                  Son Teklif Tarihi: {giveOffersForContract.lastDate}
                </div>
              </div>
            </div>
            <hr />
            <div className="flexContainerContract">
              <div className="titles">Açıklama:</div>
              <div className="titlesComment">
                {giveOffersForContract.comment}
              </div>
            </div>
          </div>
        </div>
        <div className="footerFlex">
          <div>Yukarıda da belirtilen</div>
          <div className="footerIdClass">{giveOffersForContract.firmId}</div>
          <div> id'li firmanın </div>
          <div className="footerIdClass">{offersForContract.userId}</div>
          <div className="withIdText">
            id'li şahsıma verdiği fiyatlandırma ve işçilik teklifini kabul
            ediyorum.
          </div>
        </div>
        <div className="contractButtonsAll">
          <button className="contractBtn">
            <Link to={`/offer/mine/${offersForContract._id}`}>GERİ GİT</Link>
          </button>
          <button className="contractBtn">
            <Link to="/myOffers">İPTAL ET</Link>
          </button>
          <button onClick={saveContract} className="contractBtn">KABUL ET & ANLAŞ</button>
        </div>
      </div>
    </>
  );
};

export default Contract;
