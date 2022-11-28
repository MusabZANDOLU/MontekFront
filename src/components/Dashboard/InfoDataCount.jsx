import { useEffect, useState } from "react";
import { BASE_URL } from "../../base";
import axios from "axios";
import "../../assets/scss/dashSection.scss";

const InfoDataCount = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const response = await axios.get(`${BASE_URL}`);
    setCount(response.data);
  };

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
            <div className="idcCount">{count[0] > 0 ? count[0] : '120'}</div>
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
            <div className="idcCount">{count[1] > 0 ? count[1] : '142'}</div>
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
            <div className="idcCount">{count[2] > 0 ? count[2] : '1130'}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDataCount;
