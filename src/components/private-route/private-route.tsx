import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  redirectTo: AppRoute;
};

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children, redirectTo } = props;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
