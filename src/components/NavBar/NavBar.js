//Tools
import './NavBar.scss'
import {Link} from 'react-router-dom'
import {CartWidget} from '../CartWidget/CartWidget.js'

export const NavBar = () => {

	return (
		<header>
			<div className="topNav">
				<Link to={"/"} className="active"> Home	</Link>
				<Link to={"/us"}> Us	</Link>
				<Link to={"/contact"}> Contact	</Link>
				<Link to={"/categorias/a"}> Category A	</Link>
				<Link to={"/categorias/b"}> Category B	</Link>
				<Link to={"/categorias/c"}> Category C	</Link>
				<Link to={"/cart"}> <CartWidget/>	</Link>
			</div>
		</header>
	)
}