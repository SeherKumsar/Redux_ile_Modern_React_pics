function SearchBar({ onSubmit}) {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing when the form is submitted
        
        onSubmit('Cars'); // Call the function that was passed to the component as a prop
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}
  
export default SearchBar;