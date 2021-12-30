import React, { useState, useEffect } from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import  useSignIn  from '../hooks/useSignIn';


const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  	formButton:  {		
		backgroundColor: "#000",
		borderRadius: 5,
		padding: 5,
		alignSelf: "flex-start"
	},
	formInput: {
		borderStyle: "solid",
		borderWidth : 2,
		borderColor: "#000",
		paddingLeft: 10,
		paddingTop: 3,
		paddingBottom: 3,
		marginBottom: 10,
		borderRadius: 2

	},
	textWhite: {
		color: "white"
	},
	container: {		
		padding: 10
	}
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username must have 6 character at least')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must have 6 character at least')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style= {styles.container} >     
		<FormikTextInput  style={styles.formInput} name="username" placeholder="Username" />
		<FormikTextInput style={styles.formInput} name="password" password={true} placeholder="Password" />
		<View  style= {styles.formButton} >
			<Pressable onPress={onSubmit}>
				<Text style={styles.textWhite} >Sign in</Text>
			</Pressable>
		</View>
	
    </View>
  );
};


const SignIn = () => {

  	const [signIn, , loginError] = useSignIn();
	const [auth, setauth] = useState(null)
	const [error, setError] = useState(null)

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const {data} = await signIn({ username, password });
			if(data){
				setauth(data.authorize.accessToken);
				setError(null)
			}
			
		} catch (e) {
			setError(e.message);
		}
	};

	useEffect(() => {
		setError(loginError)
	}, [loginError])

console.log("error",error)
console.log(auth)

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}      validationSchema={validationSchema}  >
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;



 