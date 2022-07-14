// Tools
import {useState, useEffect} from 'react'


export const ItemCount = () => {

	const [contador, setContador] = useState(1)

	const incrementar = () => {
		setContador (contador + 1)
	}

	const disminuir = () => {
		setContador (contador - 1)
	}


	useEffect ( () => {
		console.log ("Actualizacion Contador")
	}, [contador] )

	return (
		<section className="my-4 mx-4">
			<h1> Counter: </h1>

			<p className="mx-5"> {contador} </p>
			<button className="btn btn-primary mx-2" onClick={incrementar}> + </button>
			<button className="btn btn-danger mx-2" onClick={disminuir}> - </button>
		</section>

	)
}