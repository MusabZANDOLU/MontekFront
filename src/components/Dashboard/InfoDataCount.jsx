import "../../assets/scss/dashSection.scss";

const InfoDataCount = () => {
  return (
    <>
      <div className="idcAll">
        <div className="idcCard">
          <div className="idcTitle">Kullanıcılarımız</div>
          <div className="idcLeftArea">
            <img
              className="idcImage"
              src={require("../../assets/images/infoCards/customers.jpg")}
              alt=""
            ></img>
          </div>
          <div className="idcRightArea">
            <div className="idcCount">281</div>
          </div>
        </div>
        <div className="idcCard">
          <div className="idcTitle">Firmalarımız</div>
          <div className="idcLeftArea">
            <img
              className="idcImage"
              src={require("../../assets/images/infoCards/companies.jpg")}
              alt=""
            ></img>
          </div>
          <div className="idcRightArea">
            <div className="idcCount">89</div>
          </div>
        </div>
        <div className="idcCard">
          <div className="idcTitle">Tekliflerimiz</div>
          <div className="idcLeftArea">
            <img
              className="idcImage"
              src={require("../../assets/images/infoCards/offers.jpg")}
              alt=""
            ></img>
          </div>
          <div className="idcRightArea">
            <div className="idcCount">1.311</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDataCount;
