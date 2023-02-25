import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/errorPage.scss";
import Loader  from "../LoadingPage/LoadingPage";
import LoadList from '../LoadingPage/loadListPage'

function ErrorPage() {
  return (
    <div className="ErrorPageAll">
      {/* <LoadList/> */}
      <div className="errorContent">
        <div className="err404">404</div>
        <div className="errH2">SAYFA BULUNAMADI </div>
        <hr />

        <div className="errContainer">
          <div className="typed-out">
            Site dışında bir url girdiniz. Lütfen giriş sayfasına dönünüz!
          </div>
          <div className="frame">
            <Link to="/login">
              <button className="errorBtn btn-16">GİRİŞ YAP</button>
            </Link>
          </div>
        </div>
      </div>
      <Loader/>
    </div>
  );
}
export default ErrorPage;
