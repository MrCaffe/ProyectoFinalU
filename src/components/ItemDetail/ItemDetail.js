

export const ItemDetail = ({items}) => {

	return (
		<div>
			<h1> Detail of Products: </h1>
				{/* Se utiliza un MAP para retornar un nuevo array con la misma cantidad de elementos donde cada uno de ellos es el return que se paso en el callback del map */}
				{
					items.map ((item) => (
						<div>
							<h2> Product Name: {item.name} </h2>
							<img src={item.img}/>
							<h4> Price: $ {item.price} </h4>
							<h6>	Description: {item.description} </h6>
							<h5>	Category: {item.category} </h5>
							<button className="btn btn-success"> Check Out </button>
							<hr/>	
						</div>
					))					
				}				
		</div>
	)
}