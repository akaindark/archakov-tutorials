import React from "react";
import * as events from "events";

export default function Form() {

	let email = "";
	let password = "";

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email && password) {
			console.log(email.trim(), password.trim());
			email = "";
			password = "";
		} else {
			alert('Ведите ваши данные!')
		}
	};

	function changeInputValue (event) {
		if (event.target.name === 'email'){
			email = event.target.value;
		} else {
			password = event.target.value;
		}
	}

	return (
		<div style={styleWrap}>
			<form style={styleForm} onSubmit={handleSubmit}>
				<input name='email' onChange={changeInputValue} style={styleInput} type="text" placeholder='E-Mail'/>
				<input name='password' onChange={changeInputValue} style={styleInput} type="password"
							 placeholder='Пароль'/>
				<button style={styleBnt} type='submit'>Войти</button>
			</form>
		</div>
	);
}

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