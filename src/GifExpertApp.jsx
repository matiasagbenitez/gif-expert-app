import { useState } from "react";
import { AddCategory, GifGrid, RemoveAllCategories } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Messi"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  const onRemoveAllCategories = () => {
    setCategories([]);
  };

  return (
    <>
      <h1 className="text-6xl text-center font-bold text-slate-200">
        GifExpertApp
      </h1>
      <p className="italic text-center text-slate-200">
        Tu buscador de GIFs gratuito...
      </p>

      <div className="bg-gray-300 rounded-t-lg py-5 px-10 mt-5 flex justify-between gap-1">
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        <RemoveAllCategories onRemoveAllCategories={onRemoveAllCategories} />
      </div>

      {categories.length > 0 ? (
        <div className="bg-gray-300">
          <p className="text-center text-lg font-semibold bg-transparent">
            Resultados de la búsqueda
          </p>
          {categories.map((category) => {
            return (
              <GifGrid
                key={category}
                category={category}
                onRemoveCategory={onRemoveCategory}
              />
            );
          })}
        </div>
      ) : (
        <div className="bg-gray-300 rounded-b-lg pb-5">
          <p className="text-center text-sm italic">
            No hay categorías. Agrega una para tener resultados.
          </p>
        </div>
      )}
    </>
  );
};
