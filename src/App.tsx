import { useState } from 'react';
import { useDidUpdateEffect } from './utils/custom-effect';
import { Routing } from './routing';

const App = () => {
  const [count, setCount] = useState(0)

  useDidUpdateEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  return (
    <Routing />  
  )
  
}

export default App;
