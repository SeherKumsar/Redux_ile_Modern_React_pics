function SearchBar({ onSubmit}) {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing when the form is submitted
        
        // NEVER EVER EVER DO THIS
        onSubmit(
            document.querySelector('input').value
        );
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