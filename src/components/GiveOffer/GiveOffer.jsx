import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import Calendar from "react-calendar";
import axios from "axios";
import moment from "moment";
import Modal from "react-modal";
import { AuthLocalStorage } from "../localStorage";
import "../../assets/scss/giveOffer.scss";
import "react-calendar/dist/Calendar.css";
import { BASE_URL } from "../../base";
Modal.setAppElement("*");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const GiveOffer = () => {
  const [offers, setOffers] = useState([]);
  const [comment, setComment] = useState();
  const [price, setPrice] = useState();
  const [currentOffer, setCurrentOffer] = useState({});
  const { accessToken } = AuthLocalStorage();
  const [lastDate, setLastDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let myDate = GiveOffer.createdAt;
  myDate = moment().format("L");

  useEffect(() => {
    window.scrollTo(0, 0);
    getOffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPrice("");
    setComment("");
  }, [currentOffer]);

  const getOffer = async () => {
    await axios
      .get(`${BASE_URL}/offers/allOffer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setOffers(res.data);
      });
  };

  // const saveGiveOffer = async e => {
  //   e.preventDefault();
  //   try {
  //     if (!currentOffer || !price) {
  //       alert("Açıklama ya da fiyat alanı boş bırakılamaz!");
  //     }
  //     await axios
  //       .post(
  //         `${BASE_URL}/offers/allOffer`,
  //         {
  //           offersId: currentOffer._id,
  //           firmId: id,
  //           offerUserId: currentOffer.userId,
  //           firmName: name,
  //           firmSurName: surName,
  //           comment,
  //           price,
  //           isThereOffer: true,
  //           lastDate: lastDate,
  //         },
  //         { headers: { Authorization: `Bearer ${accessToken}` } }
  //       )
  //       .then(res => {
  //         console.log(res);
  //         console.log("girdi girdi");
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     alert("başarısız işlem.");
  //   }
  // };

  const showOfferModal = offer => {
    setCurrentOffer(offer);
  };

  // let subtitle;
  function openModalDate() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }

  function closeModalDate() {
    setIsOpen(false);
  }

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
                    {offer.userName} {offer.userSurName}
                  </div>
                  <hr />
                  <div className="giveOfferCardIn">{offer.productName}</div>
                  <div className="giveOfferCardIn">{myDate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rightContainerGive">
          <div className="modalContainer">
            <div className="modalContent">
              <div className="giveOfferCardIn">
                <div className="giveOfferCover">
                  <div className="ModalLeftRight">
                    <div>
                      <div>
                        <label className="labelModal">
                          <div className="textGivePrev">Seçilen Ürün:</div>
                          <div className="textModalCss">
                            {currentOffer.productName}
                          </div>
                        </label>
                      </div>
                      <hr />
                      <div className="textGivePrev">Diğer Detaylar</div>
                      <div className="modalCommentLR">
                        <div className="ModalCommentL">
                          <label className="labelModal">
                            <div className="textModalCss">
                              Genişlik {currentOffer.productWidth}
                            </div>
                          </label>
                          <label className="labelModal">
                            <div className="textModalCss">
                              Yükseklik: {currentOffer.productHeight}
                            </div>
                          </label>
                        </div>

                        <div className="ModalCommentR">
                          <label className="labelModal">
                            <div className="textModalCss">
                              {currentOffer.productPlace}
                            </div>
                          </label>
                          <label className="labelModal">
                            <div className="textModalCss">
                              {currentOffer.productWindow}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="labelModal">
                          <hr />
                          <div className="textGivePrev">
                            Müşteri Açıklaması:
                          </div>
                          <div className="textModalCss">
                            {currentOffer.userComment}
                          </div>
                        </label>
                      </div>
                      <div>
                        <label className="labelModal">
                          <hr />
                          <div className="textGivePrev">Teklif Tarihi:</div>
                          <div className="textModalCssDate">{myDate}</div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="modalSendKismi">
                  <div className="modalSendKismiSol">
                    <textarea
                      className="modalTextareaLeft"
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      placeholder="Müşteriye söylemek istediğiniz diğer detayları ve varsa farklı fiyatlandırmalarınız yazabilirsiniz."
                    ></textarea>
                  </div>
                  <div className="modalSendKismiSag">
                    <div className="modalTextareaRightCover">
                      <textarea
                        type={"text"}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="modalTextareaRight"
                        placeholder="Fiyat aralığı..."
                      ></textarea>
                    </div>

                    <div className="modalSendButtonCover">
                      <button
                        className="modalSendButton"
                        // onClick={e => {
                        //   saveGiveOffer(e);
                        // }}
                      >
                        Fiyat Teklifini Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <button className="ModalInCalendar" onClick={openModalDate}>
                Teklif Geçerlilik Tarihi
              </button>
            </div>
          </div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModalDate}
              style={customStyles}
            >
              <button onClick={closeModalDate}>kapat</button>
              <div>Son teklif geçerlilik tarihinizi seçiniz</div>
              <form>
                <Calendar onChange={setLastDate} value={lastDate} />
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveOffer;
