import { useState } from 'react';

function SearchBar({ onSubmit}) {

    const [term, setTerm] = useState(''); 
    // [state, function to update state value] = useState(initial value)

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing when the form is submitted
        
        // NEVER EVER EVER DO THIS
        onSubmit(
            'asdasd'
        );
    };

    const handleChange = () => {
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} />
            </form>
        </div>
    );
}
  
export default SearchBar;