import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState, createRef } from 'react'
import Routes from './routes/Routes'
import Nav from './layout/Navigation'
import Footer from './layout/Footer'

function App() {

  let cursor
  let outerCircle

  useEffect(() => {
    cursor = document.querySelector('.cursor-dot')
    outerCircle = document.querySelector('.cursor-dot-outline')
    window.addEventListener('mousemove', moveCursor)
  }, []);

  function moveCursor(e) {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
 
    outerCircle.style.left = e.pageX + 'px'
    outerCircle.style.top = e.pageY + 'px'
  }

  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot"></div>
    </div>
  );
}

export default App;
