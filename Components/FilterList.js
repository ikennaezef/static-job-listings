const FilterList = ( { filters, onRemove, onClear } ) => {
	return (
		<div className='filter-list'>
			<div className='filter-tags'>
				{ /*  Displays the filters at the top for each filter added */ }
				{filters.map(filter => (
					<button className='filter' key={filter}>
						<span className='filter-name'>{ filter }</span>
						<span className='filter-delete-btn' onClick={ ()=> onRemove(filter) } > <img src="./images/icon-remove.svg" alt="delete"/> </span>
					</button>
				))}
			</div>
			<button className='clear-all-btn' onClick={ onClear }>Clear</button>
		</div>
	)
}

export default FilterList