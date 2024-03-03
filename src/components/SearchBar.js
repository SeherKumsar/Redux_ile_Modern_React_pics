function SearchBar() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('I need to tell the parent about some data');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
            </form>
        </div>
    );
}
  
  export default SearchBar;
  