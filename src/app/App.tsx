import { useState } from 'react';

import { Button } from '@/shared/ui/button';

import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
      <p>Count is {count}</p>
      <div className="flex justify-center items-center gap-2">
        <Button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
