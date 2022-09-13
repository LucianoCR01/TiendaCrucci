import './components/NavBar';
import './components/Card'
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';


function App() {
  
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <div className='divBody'>
      <Card />
    </div>
    </>
  );
}

export default App;
