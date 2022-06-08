import './App.css';
import { snacks } from './snacks.js';
import SnackList from './SnackList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <SnackList snacks={snacks} />
    </div>
  );
}

export default App;
