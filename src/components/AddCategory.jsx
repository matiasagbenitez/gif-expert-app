import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() == 0 ? null : onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Ingrese un tipo de gif a buscar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
