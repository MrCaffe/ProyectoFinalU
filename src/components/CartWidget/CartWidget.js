// Tools
import './CartWidget.scss'
import {BsFillCartPlusFill} from 'react-icons/bs'

//Desestructuracion de los atributos (props) del componente padre US, para usar las variables y no "props.title o props.content"
export const CartWidget = () => {

	return (
		<div>
			Cart <BsFillCartPlusFill/>
		</div>
	)
}