import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, githubProvider, auth } from '../../utils/firebase';
import { GoogleIcon, GitHubIcon } from './ProviderIcons';
import { useNavigate } from 'react-router-dom';

const providers = [
	{ name: 'Google', icon: <GoogleIcon />, provider: googleProvider },
	{ name: 'GitHub', icon: <GitHubIcon />, provider: githubProvider },
];

export const OAuthButtonGroup = () => {
	const navigate = useNavigate();

	const handleSignIn = (provider: any) => {
		signInWithPopup(auth, provider)
			.then(() => {
				navigate('/home');
			})
			.catch((error: any) => {
				console.error(error);
			});
	};

	return (
		<ButtonGroup variant="secondary" spacing="4">
			{providers.map(({ name, icon, provider }) => (
				<Button key={name} flexGrow={1} onClick={() => handleSignIn(provider)}>
					<VisuallyHidden>Sign in with {name}</VisuallyHidden>
					{icon}
				</Button>
			))}
		</ButtonGroup>
	);
};
