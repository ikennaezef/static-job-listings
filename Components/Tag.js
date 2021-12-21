const Tag = ( { text, onClick } ) => {
	return (
		<button className='tag' onClick={ ()=> onClick(text) }>
			{text}
		</button>
	)
}

export default Tag