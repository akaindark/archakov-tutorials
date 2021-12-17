import React from "react";

class Profile extends React.Component{

	render() {
		const day = this.props.registredAt.getDay();
		const month = this.props.registredAt.getMonth();
		const year = this.props.registredAt.getFullYear();
		const monthText = montoToStr(month);

		function montoToStr(num) {
			return num > 12 || num < 1
				? null
				: 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
				num - 1
					];
		}

		const style = {
			maxWidth: '500px',
			border: '10px solid #e1e1e1',
			borderRadius: '20px',
			padding: '20px 40px',
			margin: '50px auto'

		}

		return(
				<div style={style}>
					<h1 style={{fontSize: '48px', fontWeight: '400'}}>Привет, <b>{this.props.name}</b></h1>
					<p style={{fontSize: '20px'}}>Дата регистрации: {`${day} ${monthText} ${year}`}</p>
				</div>
			);


	}
}

export default Profile;