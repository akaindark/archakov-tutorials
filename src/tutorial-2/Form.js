import React from "react";
import {type} from "@testing-library/user-event/dist/type";

export default function Form(){
	const email = 1;
	const password = 2;

	return(
		<form action="">
      <input  style={{display:'block'}} type="text" placeholder='E-Mail'/>
      <input style={{display:'block'}} type="password" placeholder='Пароль'/>
      <button>Войти</button>
    </form>
	);
}