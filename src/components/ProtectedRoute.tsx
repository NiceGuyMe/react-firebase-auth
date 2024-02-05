import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

interface protectedRouteProps {
	children: ReactNode;
	user: User | null;
}

export const ProtectedRoute: React.FC<protectedRouteProps> = ({
	children,
	user,
}) => {
	return user ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
	user: PropTypes.any,
};
