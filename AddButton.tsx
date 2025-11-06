import React, { useState } from 'react';

export default function AddButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <span>Count: {count}</span>
    </div>
  );
}
