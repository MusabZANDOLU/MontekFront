import alertify from "alertifyjs";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../base";
import Navbar from "../Dashboard/Navbar";
import AuthLocalStorage from "../localStorage";
import svgContract from "../../assets/svg/myOffer/svgContract.svg";

const infoContractPage = () => {
  alertify.alert(
    "Anlaşma Sayfası Hakkında",
    "Anlaşmalarınızın başında bulunan benzersiz id bilgisini firmalarınza iletişim bilgileri ile ulaştırabilirsiniz. Ayrıca bir antlaşmayı silmeniz için işin bitmesini beklemeniz sizin açınızdan çok daha iyi olacaktır. MONTEK ailesi olarak birlikte daha çok çalışmamız dileğiyle."
  );
};

const ContractUser = () => {
  const [contract, setContract] = useState([]);
  const { accessToken, id } = AuthLocalStorage();


  useEffect(() => {
    getContractById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContractById = async () => {
    const response = await axios.get(`${BASE_URL}/contract/${id}`);
    setContract(response.data);
  };

  const copyContent = async id => {
    try {
      await navigator.clipboard.writeText(id);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const deletedContract = async deletedId => {
    await axios
      .delete(`${BASE_URL}/contract/${deletedId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        window.location.reload(false);
      });
  };

  return (
    <div className="allContractUser">
      <Navbar />
      <div className="contentContratUser">
        <div className="upContactUser">
          <div className="titleContTitle">Tüm Anlaşmalarınız</div>
          <button className="infosContBtn" onClick={infoContractPage}>
            Bilgi Al
          </button>
        </div>
        <hr />
        {contract.map(contract => (
          <div className="flexContractUser" key={contract._id}>
            <div className="blockContractUser">
              <div
                onClick={e => copyContent(contract._id)}
                className="contractIdClass"
              >
                {contract._id}
              </div>
              <div><img className="svgCont" src={svgContract} alt="" /></div>
            </div>
            <div className="rightAllContent">
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Müşteri Adı:</div>
                <div>{contract.userName}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Müşteri İl ve İlçe:</div>
                <div>
                  {contract.city
                    ? contract.city + " / " + contract.town
                    : "Belirtilmemiş"}
                </div>
              </div>
              <hr />
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Firma Yetkilisi:</div>
                <div>{contract.firmName}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Firma Verdiği Teklif:</div>
                <div>{contract.firmPrice}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">İşin Bitirilme Süresi:</div>
                <div>{contract.firmEndingDay} gün</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Anlaşma Tarihi</div>
                <div>{contract.createdAt.slice(0,10)}</div>
              </div>
              <div className="flexDetailCont">
                <div className="userContTitles boldText">Firma Açıklaması:</div>
                <div className="commentContract">{contract.firmComment}</div>
              </div>
            </div>
            <div className="btnDelCont">
              <button
                onClick={e => deletedContract(contract._id)}
                className="deleteContract top"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractUser;
