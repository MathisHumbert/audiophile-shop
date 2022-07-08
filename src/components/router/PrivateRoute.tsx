import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from '../../redux/app/store';

const PrivateRoute = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  if (cart.length === 0) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
