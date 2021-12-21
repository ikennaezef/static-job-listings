import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import FilterList from './Components/FilterList'
import JobListings from './Components/JobListings'

function App() {

  const [filterTags, setfilterTags] = useState([ ]);

  // Adds the selected filter to the filterTags state if it doesn't already exist
  const addFilter = ( addedFilter )=> {
    !filterTags.includes(addedFilter) && setfilterTags([...filterTags, addedFilter]);
  }

  // Removes the selected filter
  const onRemove = ( removedFilter ) => {
    setfilterTags(filterTags.filter(tag => tag !== removedFilter));
  }

  // Clears all the filters
  const onClear =() => {
    setfilterTags([ ]);
  }

  useEffect(() => {
    setfilterTags(filterTags);
  }, [filterTags])

  return (
    <div className="App">
      <Header />
      {filterTags.length > 0 && (
          <div className='container'>
            <FilterList filters={ filterTags } onRemove= { onRemove } onClear={ onClear } />
          </div>          
        ) }  
      < JobListings onClick={ addFilter } filters={ filterTags } />
    </div>
  );
}

export default App;
