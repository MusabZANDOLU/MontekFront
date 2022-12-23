import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../base";
import AuthLocalStorage from "../localStorage";
import Navbar from "../Dashboard/Navbar";
import svgSearch from "../../assets/svg/contract/svgSearch.svg";
// import svgClearId from "../../assets/svg/contract/svgDeleteId.svg";
import svgContract from "../../assets/svg/myOffer/svgContract.svg";

const ContractCompany = () => {
  const { accessToken, id } = AuthLocalStorage();
  const [search, setSearch] = useState();
  const [searchContract, setSearchContract] = useState([]);
  const urlId = search + id;

  const searchContractFunc = async () => {
    await axios
      .get(`${BASE_URL}/contract/search/${urlId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        setSearchContract(res.data);
      });
  };

  return (
    <div className="allContractCompany">
      <Navbar />
      <form action="">
        <div className="inputAndButonCont">
          <input
            className="inputSearchContractId"
            onChange={e => setSearch(e.target.value)}
            placeholder="Antlaşma Id'sini Giriniz"
          />
          <img
            onClick={searchContractFunc}
            className="svgSearch"
            src={svgSearch}
            alt=""
          />
          {/* <input
            type="reset"
            value="Sil"
            onClick={clearId}
            className="svgSearch"
            src={svgClearId}
            alt=""
          /> */}
        </div>
      </form>
      {search && searchContract ? (
        <div>
          <div className="flexContractUser">
            <img className="svgCont" src={svgContract} alt="" />
            <div className="blockContractUser">
              {/* <div className="contractIdClass">{contract._id}</div>
              <img className="svgCont" src={svgContract} alt="" /> */}
            </div>
            <div className="rightAllContent">
              <div className="flexDetailCont">
                <div className="userContTitles boldText">
                  Müşteri Adı ve Id:
                </div>
                <div>{searchContract.userName}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">
                  Müşteri İl ve İlçe:
                </div>
                <div>
                  {searchContract.city
                    ? searchContract.city + " / " + searchContract.town
                    : "Belirtilmemiş"}
                </div>
              </div>
              <hr />
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Firma Yetkilisi:</div>
                <div>{searchContract.firmName}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">
                  Firma Verdiği Teklif:
                </div>
                <div>{searchContract.firmPrice}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">
                  İşin Bitirilme Süresi:
                </div>
                <div>{searchContract.firmEndingDay} gün</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Anlaşma Tarihi</div>
                <div>{searchContract.createdAt}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Firma Açıklaması:</div>
                <div className="commentContract">
                  {searchContract.firmComment}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        setSearch.length === 0 ? (
          <div className="nullSearctText">Arama Yapabilmek İçin Id Yazınız</div>
        ) :
        <div className="nullSearctText">
          Yazılan Id'ye uygun bir antlaşmanız bulunamamıştır. Lütfen Id'yi
          kontrol ediniz!
        </div>
      )}
    </div>
  );
};

export default ContractCompany;
