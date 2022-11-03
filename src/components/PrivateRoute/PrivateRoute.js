import { Navigate, Outlet } from "react-router";
import { AuthLocalStorage } from '../localStorage';

const PrivateWrapper = ({ auth }) => {
  const { isLogin } = AuthLocalStorage();
  
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;
