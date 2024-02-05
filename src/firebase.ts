import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signIn(email: string, password: string) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log('User created successfully:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error('Error creating user:', errorCode, errorMessage);
		});
}

export function logIn(email: string, password: string) {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log('User signed in successfully:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error('Error signing in user:', errorCode, errorMessage);
		});
}
