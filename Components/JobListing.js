import Tag from './Tag'

const JobListing = ( { job, onClick } ) => {	

	return (
		<div className='job-listing'>
			<div className='company-details'>
				<div className='company-logo'> <img src={  job.logo } alt="companylogo" /> </div>
				<div>
					<p className='company-name'>
						{ job.company }
						{ job.new && <span className='new'>NEW!</span> }
						{ job.featured && <span className='featured'>FEATURED</span> }
					</p>
					<h2 className='position'>{ job.position }</h2>
					<div className='light'>
						<span className='posted'>{ job.postedAt } . </span>
						<span className='contract'>{ job.contract } . </span>
						<span className='location'>{ job.location }</span>
					</div>
				</div>
			</div>
			{ window.visualViewport.width <= 550 && <hr/> }
			<div className='tags'>
				< Tag key={ job.role } text={ job.role } onClick={ onClick } />
				<Tag key ={ job.level } text ={ job.level } onClick={ onClick } />
				{ job.languages.map( language => <Tag key={ language } text={ language } onClick={ onClick } />  )}
				{ job.tools.map( tool => <Tag key={ tool }  text={ tool } onClick={ onClick } />  )}
			</div>
		</div>
	)
}

export default JobListing