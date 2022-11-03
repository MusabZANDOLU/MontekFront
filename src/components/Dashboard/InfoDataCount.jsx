import "../../assets/scss/dashSection.scss";

const InfoDataCount = () => {
  return (
    <>
      <div className="dSideAll">
        <div className="AllCardCount">
          <div className="CountCard">
            <i className="fa-solid fa-users rotateIcon"></i>
            <div className="rotateNumber"> 123</div>
            <div className="rotateText">Kullanıcılarımız</div>
          </div>
          <div className="CountCard">
            <i className="fa-solid fa-building rotateIcon"></i>
            <div className="rotateNumber"> 218</div>
            <div className="rotateText">Firmalarımız</div>
          </div>
          <div className="CountCard">
            {/* <i className="fa-solid fa-briefcase rotateIcon"></i> */}
            <i className="fa-solid fa-handshake rotateIcon"></i>
            <div className="rotateNumber"> 10.852</div>
            <div className="rotateText">Tekliflerimiz</div>
          </div>
          <div className="CountCard">
          {/* <i className="fa-brands fa-buffer rotateIcon"></i> */}
          <i className="fa-solid fa-store rotateIcon"></i>
            <div className="rotateNumber"> 30+</div>
            <div className="rotateText">Ürünlerimiz</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDataCount;
