import React from 'react';
import './style.scss';

export const ItemForm = () => {
  return (
    <form>
      <label>Item name:</label>
      <br />
      <input className='text-input' type='text' />
      <br />
      <button>Add</button>
    </form>
  );
};
