import './App.css';
import { FaBeer } from 'react-icons/fa';
import Answer from './components/Answer';

function App() {
  return (
    <div className='App'>
      <div className='column'>
        <h1> Lets go for a <FaBeer />? </h1>
        <Answer />
      </div>
    </div>
  );
}

export default App;
