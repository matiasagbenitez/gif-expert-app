import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([
    "Messi"
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  return (
    <>
      <h1 className="text-5xl text-center font-bold text-slate-400">GifExpertApp</h1>
      <p className="italic text-center text-slate-400">Tu buscador de GIFs gratuito...</p>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {
        categories.length > 0
        ?
        categories.map((category) => {
          return <GifGrid 
            key={category} 
            category={category} 
            onRemoveCategory={onRemoveCategory}
          />;
        })
        :
        <div className="bg-gray-400 rounded-b-lg pb-5">
          <p className="text-center text-sm italic">
            No hay categorías. Agrega una para tener resultados.
          </p>
        </div>
      }
    </>
  );
};
