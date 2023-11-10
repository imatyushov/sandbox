import React from 'react';
import './App.css';


function test() {
  const div = document.getElementById('raf');
  if (!div) {
    return;
  }
  div.style.transition = 'height 1s ease';
  div.style.height = '100px';
  requestAnimationFrame(() => {
    div.style.height = '500px';
  })
}

test();

function App() {
  return (<div></div>);
}

export default App;
