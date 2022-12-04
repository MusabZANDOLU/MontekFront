import React from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./LoginRegister/Login";
import AboutUs from "./AboutUs/AboutUs";
import MyOffers from "./MyOffers/MyOffers";
import ErrorPage from "./ErrorPage/ErrorPage";
import DashSection from "./Dashboard/DashSection";
import Products from "./Products/Products";
import GetOfferCategory from "./GetOffers/GetOfferCategory";
import Companies from "./Companies/Companies";
import GiveOffer from "./GiveOffer/GiveOffer";
import GetOfferFoldingWindow from "./GetOffers/GetOfferFoldingWindow";
import GetOfferPvc from "./GetOffers/GetOfferPvc";
import GetOfferShowerBox from "./GetOffers/GetOfferShowerBox";
import GetOfferCategoryShow from "./GetOffers/GetOfferCategoryShow";
import GetOfferShopping from "./GetOffers/GetOfferShopping";
import GetOfferSwatter from "./GetOffers/GetOfferSwatter";
import GetOfferAluminumHandrail from "./GetOffers/GetOfferAluminumHandrail";
import MyOfferModal from "./MyOffers/MyOfferModal";
import RegisterUser from "./LoginRegister/RegisterUser";
import RegisterCompany from "./LoginRegister/RegisterCompany";
import CompanyInfoPage from "./InfoPages/CompanyInfoPage";
import UserInfoPage from "./InfoPages/UserInfoPage";
import GiveOfferMine from "./GiveOffer/GiveOfferMine";
import GiveOfferDetail from "./GiveOffer/GiveOfferDetail";
import City from "../components/citiesPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*----------------------------------- PUBLIC ROUTE ----------------------------------- */}
        <Route path="/" element={<DashSection />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/getOffer/categoryShow" element={<GetOfferCategoryShow />} />
        <Route path="/city" element={<City />} />
        <Route path="*" element={<ErrorPage />} />

        {/* ----------------------------------- PRIVATE ROUTE ----------------------------------- */}
        <Route element={<PrivateRoute />}>
          <Route path="getOffer/category" element={<GetOfferCategory />} />
          <Route path="myOffers" element={<MyOffers />} />
          <Route path="/giveOffer" element={<GiveOffer />} />
          <Route path="/giveOffer/mine" element={<GiveOfferMine />} />
          <Route path="/giveOffer/detail/:id" element={<GiveOfferDetail />} />
          <Route path="/getOffer/foldingWindow" element={<GetOfferFoldingWindow />} />
          <Route path="/getOffer/pvc" element={<GetOfferPvc />} />
          <Route path="/getOffer/showerBox" element={<GetOfferShowerBox />} />
          <Route path="/getOffer/shopping" element={<GetOfferShopping />} />
          <Route path="/getOffer/swatter" element={<GetOfferSwatter />} />
          <Route path="/getOffer/aluminumHandrail" element={<GetOfferAluminumHandrail />} />
          <Route path="/offer/mine" element={<MyOfferModal />} />
          <Route path="/user/informations/:id" element={<UserInfoPage />} />
          <Route path="/companies/informations/:id" element={<CompanyInfoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
