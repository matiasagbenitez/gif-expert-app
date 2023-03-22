import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="card-grid-header">
        <h3>{category}</h3>
      </div>
      <hr />

      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} // Recibe todas las propiedades de image como props
          />
        ))}
      </div>
    </>
  );
};
