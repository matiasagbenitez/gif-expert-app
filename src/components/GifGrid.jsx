import { GifItem } from "./GifItem";
import { RemoveCategory } from "./RemoveCategory";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category, onRemoveCategory }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <div className="bg-gray-300 py-2 px-10 last-of-type:rounded-b-lg">
        <div className="flex gap-2">
          <RemoveCategory
            onRemoveCategory={onRemoveCategory}
            category={category}
          />
          <h2>
            Resultados de la búsqueda{" "}
            <span className="font-semibold">{category}</span>
          </h2>
        </div>

        {isLoading && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-5">
          {images.length > 0 ? (
            images.map((image) => (
              <GifItem
                key={image.id}
                {...image} // Recibe todas las propiedades de image como props
              />
            ))
          ) : (
            <p className="col-span-5 text-center text-sm italic">
              No hay se encontraron resultados. Prueba con otros términos.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
