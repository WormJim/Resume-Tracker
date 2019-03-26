import React from 'react';

const Input = ({ cls, field, value, change }) => {
  return (
    <input
      type='text'
      className={cls}
      name={field}
      placeholder={field}
      value={value}
      onChange={change}
    />
  );
};

export default Input;
