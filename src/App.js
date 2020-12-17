import React, { useEffect } from 'react'
import FancyButton from './components/FancyButton';
import './App.css';

function App() {
  const ref = React.createRef();

  useEffect(() => {
    ref.current.innerText = 'You got it!'
  }, [ref])

  return (
    <div className="App">
      <FancyButton ref={ref}>
        Click me!
      </FancyButton>
    </div>
  );
}

export default App;
