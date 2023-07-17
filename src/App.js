import './App.css';

import Answer from './components/Answer';
import Question from './components/Question';

function App() {
  return (
    <div className='App'>
      <div >
        <Question />
        <Answer />
      </div>
    </div>
  );
}

export default App;
