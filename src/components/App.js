import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes/Routes'
import Nav from './layout/Navigation'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes/>
    </div>
  );
}

export default App;
