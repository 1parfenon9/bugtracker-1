import React from 'react';

const CheckBoxPriority = ({ priority }) => {
  return (
    <div>
      <label>{priority}</label>
      <input type="checkbox" />
    </div>
  );
};

export default CheckBoxPriority;
