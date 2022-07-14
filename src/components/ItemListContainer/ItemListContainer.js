// Tools
import './ItemListContainer.scss'
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

// Components
import {Products} from '../Products/Products.js'
import {ItemList} from '../ItemList/ItemList.js'
import {Loader} from '../Loader/Loader.js'

//Desestructuracion de los atributos (props) del componente padre US, para usar las variables y no "props.title o props.content"
export const ItemListContainer = () => {

	// Estado para almacenar los datos. Se inicializar como un array vacio, para guardar la lista de productos a mostrar
	const [items, setItems] = useState([])
	// Estado para controlar el spinner.
	const [loading, setLoading] = useState(true)

	const {categoryId} = useParams()

	// Se crea una funcion de flecha, que va a retornar una Nueva Promesa
	// Se define la promesa que por defecto queda en estado PENDING, ya que no tiene definido que hacer en un caso u otro
	// Se condiciona la promesa, para luego definir que hacer en un caso u otro (Se ejecuta como un switch)
	const pedirDatos = () => {
		return new Promise ((resolve, reject) => {
			setTimeout (() => {
					resolve(Products)				
			}, 1000)
		})
	}


	useEffect ( () => {
		setLoading(true)
		// Esta promesa se resuelve siempre, se tiene que forzar una condicion para que se ejecute o no.(true/false)
		pedirDatos()
			// Se define las instruccion de la promesa RESOLVE. Si se resuelve, ingresa en el .then y se ejecuta el bloque (omitiendo el .catch)
			.then ((resp) => {
				if (!categoryId) {
					setItems (resp)
				} else {
					setItems(resp.filter((item) => item.category === categoryId))
				}
			})

			// Se define las instruccion de la promesa REJECT. Si se rechaza, ingresa en el .catch y se ejecuta el bloque (omitiendo el .then)
			.catch ((error) => {
				console.log("Error: ", error)
			})
			.finally (() => {
				setLoading(false)
			})
	}, [categoryId])

		if (loading) {
		return 	<section className="container my-5">
							<Loader/>
						</section>
	}


	return (
		// <section className="my-4 mx-4">
		// 	{/* Se pasa el estado de items como propiedad para el componente ItemList, de esta manera renderiza el mock de productos */}
		// 	{
		// 		loading
		// 			? <Spinner animation="border" role="status">
		// 					<span className="visually-hidden">Loading...</span>
		// 				</Spinner>
		// 			: <>
		// 					<ItemList items={items}/>
		// 				</>
		// 	}
		// 	<ItemList items={items}/>
		// </section>
		<section>

			<ItemList items={items}/>
		
		</section>
	)
}