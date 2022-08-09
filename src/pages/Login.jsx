import React, {useRef} from 'react';
import '../styles/Login.scss';

const Login = () => {

	const form = useRef(null);

	const handleSubmit = (event) =>{
		event.preventDefault(); {/*Esto cancela el evento si es cancelable, o mejor dicho, la acción por defecto que pertenece al evento. Es este caso, que el formulario se envie y se recargue la página. Esto por fines del ejercicio, para ver en consola el objeto */}
		const formData = new FormData(form.current); {/*FormData es un prototipo de JS, permite usar un arreglo key/value representado por los campos y sus valores, listos para ser usados en una API, el método .current es para la información actual  */}
		const data = {
			username: formData.get('email'),
			password: formData.get('password'), 
		}; {/*Se relaciona con los names de los input */}
		console.log(data);
	};

	
	{/*Instanciar datos y los separa y los tiene en cuenta cuando se haga submit */}
	{/*Más seguro para comunicarse con el backend */}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button type="submit" className="primary-button login-button" onClick={handleSubmit}> Log in </button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" >Sign up</button>
			</div>
		</div>
	);
}

export default Login;
