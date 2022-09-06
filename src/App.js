import './components/NavBar';
import './components/Card'
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';


function App() {
  
  return (
    <div>
    <header>
      <NavBar/>
    </header>
    <div className='divBody'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
  );
}

export default App;
