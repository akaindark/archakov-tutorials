import React from "react";
import * as events from "events";

export default function Form() {

	const styleWrap = {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto'
	}

	const styleForm = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}

	const styleInput = {
		display: 'block',
		marginBottom: '20px',
		padding: '5px 10px',
		fontSize: '20px'
	}

	const styleBnt = {
		width: '200px',
		height: '36px',
		borderRadius: '10px',
		border: 'none',
		fontSize: '18px',
		backgroundColor: '#e1e1e1',
		cursor: 'pointer',
		marginRight: 'auto'
	}

	const email = (event) => {

	};
	const password = () => {

	};

	return (
		<div style={styleWrap}>
			<form style={styleForm} action="">
				<input onInput={() => email} style={styleInput} type="text" placeholder='E-Mail'/>
				<input onChange={() => password} style={styleInput} type="password" placeholder='Пароль'/>
				<button style={styleBnt} type='submit'>Войти</button>
			</form>
		</div>
	);
}