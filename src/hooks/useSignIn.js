import  { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';

const useSignIn = () => {
	const [error, setError] = useState(null)
	const [mutate, result] = useMutation(LOGIN, {
		onError: (error) => {
			setError(error.message)     
		}
	});

	const login = async ({ username, password }) => {
			return mutate( { variables : {  username, password}} )		
	};

	return [login, result, error];
};

export default useSignIn
