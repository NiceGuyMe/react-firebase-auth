import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Signin from './components/Auth/Signin/Signin';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './components/AuthProvider';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<AuthProvider>
							<Login />
						</AuthProvider>
					}
				/>
				<Route
					path="/signin"
					element={
						<AuthProvider>
							<Signin />
						</AuthProvider>
					}
				/>
				<Route
					path="/home"
					element={
						<AuthProvider>
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						</AuthProvider>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
