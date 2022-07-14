import {Item} from '../Item/Item.js'

export const ItemList = ({items}) => {

	return (
		<div>
			<h1> Catalogue of Products: </h1>
				{/* Se utiliza un MAP para retornar un nuevo array con la misma cantidad de elementos donde cada uno de ellos es el return que se paso en el callback del map */}
				{
					items.map ((item) => <Item key={item.id} item={item}/>)
				}
		</div>
	)
}