import { Container, Stack, HStack, Checkbox, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { authSchema } from '../../utils/yupSchema';
import { EmailField } from './Fields/EmailField';
import { PasswordField } from './Fields/PasswordField';
import { FormBody } from './AuthForm/FormBody';
import FormButton from './AuthForm/FormButton';
import { FormHeader } from './AuthForm/FormHeader';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { auth, handleLogin, handleSignIn } from '../../utils/firebase';
import { FirebaseError } from 'firebase/app';
import { sendPasswordResetEmail } from 'firebase/auth';

interface AuthProps {
	isLogin: boolean;
}
interface inputProps {
	email: string;
	password: string;
}

export const Auth: React.FC<AuthProps> = ({ isLogin }) => {
	const navigate = useNavigate();

	const loginHanlder = (values: inputProps) => {
		handleLogin(values.email, values.password)
			.then(() => {
				navigate('/home');
			})
			.catch((error: FirebaseError) => console.log(error.message));
	};
	const createUserHandler = (values: inputProps) => {
		handleSignIn(values.email, values.password)
			.then(() => {
				navigate('/');
			})
			.catch((error: FirebaseError) => console.log(error.message));
	};

	const triggerResetEmail = async (email: string) => {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset email sent');
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: authSchema,
		onSubmit: (values) => {
			isLogin ? loginHanlder(values) : createUserHandler(values);
		},
	});

	return (
		<Container
			maxW="lg"
			py={{ base: '12', md: '24' }}
			px={{ base: '0', sm: '8' }}
		>
			<Stack spacing="8">
				<FormHeader isLogin={isLogin} />
				<FormBody onSubmit={formik.handleSubmit}>
					<Stack spacing="6">
						<Stack spacing="5">
							<EmailField
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email && (
								<span className="error">{formik.errors.email}</span>
							)}
							<PasswordField
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.touched.password && formik.errors.password && (
								<span className="error">{formik.errors.password}</span>
							)}
						</Stack>
						{isLogin && (
							<HStack justify="space-between">
								<Checkbox defaultChecked>Remember me</Checkbox>
								<Button
									variant="text"
									size="sm"
									onClick={() => triggerResetEmail(formik.values.email)}
								>
									Forgot password?
								</Button>
							</HStack>
						)}
						<FormButton isLogin={isLogin} />
					</Stack>
				</FormBody>
			</Stack>
		</Container>
	);
};

Auth.propTypes = {
	isLogin: PropTypes.bool.isRequired,
};
