import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import jobsData from '../data.json'

const JobListings = ( { onClick, filters } ) => {

	const [jobs, setJobs] = useState([ ]);
	useEffect(() => {
		setJobs(jobsData);


		// sets the displayed jobs according to the filters
		if (filters.length > 0) {
				let tempJobs = jobs;
				filters.forEach(filter => {
					tempJobs = tempJobs.filter(job => 
						job.role === filter ||
						job.level === filter ||
						job.languages.includes(filter) ||
						job.tools.includes(filter)
					);
				});
				setJobs(tempJobs);
			}

			


	}, [ filters ])

	

	return (
		<div className='jobs-list container'>
			{jobs.map(j => <JobListing key={j.id} job={j} image={j.logo} onClick={ onClick } />)}
		</div>
	)
}

export default JobListings