import { useState } from 'react';

function SearchBar({ onSubmit}) {

    const [term, setTerm] = useState(''); 
    // [state, function to update state value] = useState(initial value)

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing when the form is submitted
        
        onSubmit(
            'asdasd'
        );
    };

    const handleChange = (event) => {
        // console.log(event.target.value); // used event.target.value instead of all event
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                Confirm your search: {term}
                <input value={term} onChange={handleChange} />
                {term.length < 3 && 'Term must be longer'}
            </form>
        </div>
    );
}
  
export default SearchBar;