import React from "react";

class Profile extends React.Component{

	render() {

		const date = this.props.registredAt.toLocaleString('ru', {day: 'numeric',
		month: 'long',
		year: 'numeric'});

		const style = {
			maxWidth: '500px',
			border: '10px solid #e1e1e1',
			borderRadius: '20px',
			padding: '20px 40px',
			margin: '50px auto'

		}

		return(
				<div style={style}>
					<h1 style={{fontSize: '48px', fontWeight: '400'}}>Привет, <b>{this.props.name.split(' ', 1)}!</b></h1>
					<p style={{fontSize: '20px'}}>Дата регистрации: {date}</p>
				</div>
			);


	}
}

export default Profile;