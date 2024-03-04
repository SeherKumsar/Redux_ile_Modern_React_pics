import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return (
      <div key={index}>
        <ImageShow image={image} />
      </div>
    );
  });

  return <div> {renderedImages} </div>;
}

export default ImageList;
