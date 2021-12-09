import './App.css';
import NavBar from './components/navbar';

function App() {

  function getText() {    
    return 'I am some text';
  }

  return (
    <NavBar text={getText()} />
  );
}

export default App;
