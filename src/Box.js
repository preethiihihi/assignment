import React, { useState } from 'react';

const Box = ({changecount}) => {
  const [color, setColor] = useState('orange');

  const handleClick = () => {
    setColor('green');
    changecount();
  };

  return (
    <div
      className='box'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    > 
    </div>
  );
};

export default Box;