

//Desestructuracion de los atributos (props) del componente padre US, para usar las variables y no "props.title o props.content"
export const Contact = ({title, content}) => {
	
	return (
		<section className="my-4 mx-4">
			<h2> {title} </h2>
			<hr/>
			<p> {content} </p>
		</section>
	)
}