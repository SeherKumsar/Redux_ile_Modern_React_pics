import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App () {
    const [images, setImages] = useState([]); // empty array as initial value

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} /> {/* Pass the images state as a prop to ImageList */}
        </div>
    );
}

export default App;