import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() == 0 ? null : onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit} aria-label="form" className='bg-gray-400 rounded-t-lg pt-5 px-10 mt-5'>
      <p>
        <label className="text-md font-semibold">
          Agregar categoría
        </label>
      </p>
      <input
        type="text"
        placeholder="Ingrese una categoría..."
        value={inputValue}
        onChange={onInputChange}
        className="w-full my-5 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-200"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};