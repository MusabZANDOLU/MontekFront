import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import moment from "moment";
import AuthLocalStorage from "../localStorage";
import "../../assets/scss/myOffers.scss";

const MyOffers = () => {
  const [myOffers, setMyOffer] = useState([]);

  let myDate = myOffers.createdAt;
  myDate = moment().format("LL");

  const { accessToken } = AuthLocalStorage();
  useEffect(() => {
    getMyOffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const deletedOffer = async () => {
  //   await axios
  //     .get("http://localhost:5000/Offers", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then(res => {
  //       setMyOffer(res.data);
  //       console.log(res)
  //     });
  //   // setMyOffer(response.data.data);
  // };

  const getMyOffer = async () => {
    await axios
      .get("https://montekserver.herokuapp.com/Offers", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setMyOffer(res.data);
      });
    // console.log(response)
    // setMyOffer(response.data.data);
  };

  // className={`true ? "dark" : "light"` ------------ÖNEMLİ


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
     {/* <button className="gridListBtn"><i className="fa-solid fa-table-cells-large gridList"></i></button>
     <button className="gridListBtn"><i className="fa-solid fa-list gridList"></i></button> */}


      <div className="myOfferAll">
        {myOffers.map(getOffers => (
          <div className="radiogroupMyOffer" key={getOffers._id}>
            <div>
              <div>
                <div className="myOfferAllCol">
                  <div className="myOfferLeftCol">
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
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
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
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
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productHeight}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productPlace}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productWindow}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="myOfferRightCol">
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Açıklamam:
                          <br />
                          <hr />
                          {getOffers.userComment}
                        </div>
                      </label>
                    </div>
                    <br />
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Teklif Tarihim:
                          <br />
                          <hr />
                          {myDate}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="downButtons">
                  <div className="myOfferDetailBtn">
                    <Link to="/mineOffer">
                      <button className="myOfferBtn">Gelen tekliflerim.</button>
                    </Link>
                  </div>
                  <div className="myOfferDeleteBtn">
                    <i className="fa-solid fa-trash myOfferBtnDelete"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyOffers;
