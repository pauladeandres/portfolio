import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home'
import Section1 from './pages/Section1'
import SectionContact from './pages/SectionContact'
import Nav from './layout/Navigation'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Section1/>
      <SectionContact/>
    </div>
  );
}

export default App;
