import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return (
      <div key={index}>
        <ImageShow image={image} />
      </div>
    );
  });

  return <div className='image-list'> {renderedImages} </div>;
}

export default ImageList;
