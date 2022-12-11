import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouteUser from "./PrivateRoute/PrivateRouteUser";
import PrivateRouteCompany from "./PrivateRoute/PrivateRouteCompany";

import Companies from "./Companies/Companies";
import Products from "./Products/Products";
import AboutUs from "./AboutUs/AboutUs";
import Login from "./LoginRegister/Login";
import RegisterUser from "./LoginRegister/RegisterUser";
import RegisterCompany from "./LoginRegister/RegisterCompany";
import GetOfferCategoryShow from "./GetOffers/GetOfferCategoryShow";
import GetOfferCategory from "./GetOffers/GetOfferCategory";
import MyOffers from "./MyOffers/MyOffers";
import GetOfferFoldingWindow from "./GetOffers/GetOfferFoldingWindow";
import GetOfferPvc from "./GetOffers/GetOfferPvc";
import GetOfferShowerBox from "./GetOffers/GetOfferShowerBox";
import GetOfferShopping from "./GetOffers/GetOfferShopping";
import ErrorPage from "./ErrorPage/ErrorPage";
import DashSection from "./Dashboard/DashSection";
import MyOfferModal from "./MyOffers/MyOfferModal";
import GetOfferSwatter from "./GetOffers/GetOfferSwatter";
import GetOfferAluminumHandrail from "./GetOffers/GetOfferAluminumHandrail";
import UserInfoPage from "./InfoPages/UserInfoPage";
import GiveOffer from "./GiveOffer/GiveOffer";
import CompanyInfoPage from "./InfoPages/CompanyInfoPage";
import GiveOfferMine from "./GiveOffer/GiveOfferMine";
import GiveOfferDetail from "./GiveOffer/GiveOfferDetail";

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
        <Route path="*" element={<ErrorPage />} />

        {/* ----------------------------------- PRIVATE ROUTE USER----------------------------------- */}
        <Route element={<PrivateRouteUser />}>
          <Route path="/getOffer/category" element={<GetOfferCategory />} />
          <Route path="/myOffers" element={<MyOffers />} />
          <Route path="/getOffer/foldingWindow" element={<GetOfferFoldingWindow />} />
          <Route path="/getOffer/pvc" element={<GetOfferPvc />} />
          <Route path="/getOffer/showerBox" element={<GetOfferShowerBox />} />
          <Route path="/getOffer/shopping" element={<GetOfferShopping />} />
          <Route path="/getOffer/swatter" element={<GetOfferSwatter />} />
          <Route path="/getOffer/aluminumHandrail" element={<GetOfferAluminumHandrail />} />
          <Route path="/offer/mine/:id" element={<MyOfferModal />} />
          <Route path="/user/informations/:id" element={<UserInfoPage />} />
        </Route>

        {/* ----------------------------------- PRIVATE ROUTE COMPANY----------------------------------- */}
        <Route element={<PrivateRouteCompany />}>
          <Route path="/companies/informations/:id" element={<CompanyInfoPage />} />
          <Route path="/giveOffer" element={<GiveOffer />} />
          <Route path="/giveOffer/mine" element={<GiveOfferMine />} />
          <Route path="/giveOffer/detail/:id" element={<GiveOfferDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
