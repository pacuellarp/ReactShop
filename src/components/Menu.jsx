import React from 'react';
import '../styles/Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/login" className="title">My orders</Link>
				</li>
				<li>
					<Link to="/">My account</Link>
				</li>
				<li>
					<Link to="/signup">Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
