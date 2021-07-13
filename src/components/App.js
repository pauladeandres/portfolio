import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState, createRef } from 'react'
import Routes from './routes/Routes'
import Nav from './layout/Navigation'
import Footer from './layout/Footer'

function App() {

  let cursor
  let outerCircle
  let links

  useEffect(() => {
    cursor = document.querySelector('.cursor-dot')
    outerCircle = document.querySelector('.cursor-dot-outline')
    links = document.querySelectorAll('a')
    console.log(links)
    links.forEach(link => link.addEventListener('mouseenter', changeClass))
    links.forEach(link => link.addEventListener('mouseout', changeClassBack))
    window.addEventListener('mousemove', moveCursor)
  }, []);

  function moveCursor(e) {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
    outerCircle.style.left = e.pageX + 'px'
    outerCircle.style.top = e.pageY + 'px'
  }

  function changeClass() {
    outerCircle.classList.replace("cursor-dot-outline", "cursor-dot-outline-hover")
  }
  function changeClassBack() {
    outerCircle.classList.replace("cursor-dot-outline-hover", "cursor-dot-outline")
  }

  return (
    <div className="App">
      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot"></div>
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
