import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Signin from './components/Auth/Signin/Signin';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
	const [user, setUser] = useState<User | null>(null);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);

				return;
			}
			setUser(null);
		});
		unsubscribe();
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signin" element={<Signin />} />
				<Route
					path="/home"
					element={
						<ProtectedRoute user={user}>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
