import React from "react";

export const RemoveCategory = ({ onRemoveCategory, category }) => {
  return (
    <button
      onClick={() => onRemoveCategory(category)}
      className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded-lg text-xs"
      title={`Eliminar ${category} de la lista`}
    >
      X
    </button>
  );
};
