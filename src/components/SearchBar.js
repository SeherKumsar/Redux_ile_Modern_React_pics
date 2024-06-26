import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit}) {

    const [term, setTerm] = useState(''); 
    // [state, function to update state value] = useState(initial value)

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing when the form is submitted
        
        onSubmit(term);
    };

    const handleChange = (event) => {
        // console.log(event.target.value); // used event.target.value instead of all event
        setTerm(event.target.value);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}
  
export default SearchBar;