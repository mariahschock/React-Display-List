import './App.css';
import { snacks } from './snacks.js';
import { pets } from './pets.js';
import SnackList from './SnackList';
import PetList from './PetList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <h1>First List</h1>
      <SnackList snacks={snacks} />
      <hr />
      <h1>Second List</h1>
      <PetList pets={pets} />
      <hr />
      <h1>Third List</h1>
    </div>
  );
}

export default App;
