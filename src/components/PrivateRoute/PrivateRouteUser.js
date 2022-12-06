import { Navigate, Outlet } from "react-router";
import { AuthLocalStorage } from '../localStorage';

const PrivateWrapper = ({ auth }) => {
  const { isLogin, type } = AuthLocalStorage();
  
  return isLogin && type === 'user' ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;
