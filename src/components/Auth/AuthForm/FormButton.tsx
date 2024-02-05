import { Stack, Button, HStack, Divider, Text } from '@chakra-ui/react';
import { OAuthButtonGroup } from '../OAuthButtonGroup';
import PropTypes from 'prop-types';

interface FormButtonProps {
	isLogin: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ isLogin }) => {
	return (
		<Stack spacing="6">
			{isLogin ? (
				<Button type="submit">Sign in</Button>
			) : (
				<Button type="submit">Login</Button>
			)}
			<HStack>
				<Divider />
				<Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
					or continue with
				</Text>
				<Divider />
			</HStack>
			<OAuthButtonGroup />
		</Stack>
	);
};

FormButton.propTypes = {
	isLogin: PropTypes.bool.isRequired,
};

export default FormButton;
