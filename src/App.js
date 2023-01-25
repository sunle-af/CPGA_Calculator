import './App.css';
import GradePage from './grade';
import background from'./assets/bg.jpg'
function App() {
  return (
    <div className="App">
      <header style={{backgroundImage: `url(${background})` , }}  className="App-header">
        <GradePage />
      </header>
    </div>
  );
}

export default App;
