import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
