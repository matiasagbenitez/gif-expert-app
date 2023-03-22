import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="bg-gray-400 pb-5 px-10 last-of-type:rounded-b-lg">

        <h2>
          Estos son los resultados de la búsqueda:{" "}
          <span className="font-semibold">{category}</span>
        </h2>

        {isLoading && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
          {images.map((image) => (
            <GifItem
              key={image.id}
              {...image} // Recibe todas las propiedades de image como props
            />
          ))}
        </div>


      </div>
    </>
  );
};
