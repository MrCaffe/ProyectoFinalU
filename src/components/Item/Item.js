
export const Item = ({item}) => {

	return (
		<div>
			<h2> Product Name: {item.name} </h2>
			<img src={item.img}/>
			<h4> Price: $ {item.price} </h4>
			<button className="btn btn-primary"> Buy </button>
			<hr/>
		</div>
	)
}