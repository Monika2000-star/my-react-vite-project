import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [isLike, setIsLike] = useState(false);
  const [color, setColor] = useState('lightblue');

  const togglevisibility = () => {
    setIsVisible(prev => !prev);
    document.body.style.backgroundColor = "lightblue";
  };
  const toggleLike = () => {
    setIsLike((prev) => !prev);
    document.body.style.backgroundColor = "lightgray";
  };
  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'lightblue' ? 'lightgreen' : 'lightblue'));
  };
  const handleChange = (event) => {
    setText(event.target.value);
    document.body.style.backgroundColor = "lightpink";
  };


  return (
    <>
     <div>
      <h1>EXAMPLE : 2</h1>
      <button onClick={togglevisibility}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>This is the message!</p>}
     </div>
     <div>
      <h1>EXAMPLE : 3</h1>
      <h2>Real Time Input Display</h2>
      <input
       type="text"
       value={text}
       onChange={handleChange}
       placeholder='Type something...'      
      />
      <p>You typed: {text}</p>
     </div>
     <div><h1>EXAMPLE : 4</h1>
     <h2>Post</h2>
     <button onClick={toggleLike}>
      {isLike ? 'Unlike' : 'Like'}
     </button>
     <p>{isLike ? 'You liked this post!' : 'You have not liked this post.'}</p>
     </div>
     <div
     style={{
      width: '200px',
      height: '200px',
      backgroundColor: color, 
      transition: 'background-color 0.3s', 
    }}
    >
      <h1>EXAMPLE : 5</h1>
      <button onClick={toggleColor}>Toggle Background Color</button>

     </div>
    </>
  );
}

export default App
