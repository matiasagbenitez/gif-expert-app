export const RemoveAllCategories = ({ onRemoveAllCategories }) => {
  return (
    <button
      onClick={onRemoveAllCategories}
      className="bg-slate-600 hover:bg-slate-800 text-white font-semibold px-2 rounded-lg text-xs whitespace-nowrap"
      title={`Eliminar todas las categorías`}
    >
      Limpiar listado
    </button>
  );
};
