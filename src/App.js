import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const increment2 = () => {
    setCount(prexiousCount => prexiousCount + 1)
  }

  const decrement2 = () => {
    setCount(prexiousCount => prexiousCount - 1)
  }

  const double = () => {
    setCount(count * 2)
  }

  const ifTriple = () => {
    if (count % 3 === 0) {
      return setCount(count / 3)
    } else {
      return setCount(count)
    }
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <React.Fragment>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={ifTriple}>3の倍数の時だけ3で割る</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;
