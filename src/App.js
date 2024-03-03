import SearchBar from './components/SearchBar';
import searchImages from './api';

function App () {

    const handleSubmit = (term) => {
        const result = searchImages(term);

        console.log(result);
    };

    return (
        <div>
            {/* <SearchBar callWhenUserPressesEnter={handleSubmit} /> */}
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}

export default App;