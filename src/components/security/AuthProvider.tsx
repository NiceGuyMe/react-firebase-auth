import { User } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { auth } from '../../utils/firebase';
import PropTypes from 'prop-types';

export const AuthContext = createContext<{
	currentUser: User | null;
}>({
	currentUser: null, // Initial state for currentUser
});
interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
