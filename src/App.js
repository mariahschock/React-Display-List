import './App.css';
import { snacks } from './snacks.js';
import { pets } from './pets.js';
import { musics } from './music.js';
import SnackList from './SnackList';
import PetList from './PetList';
import MusicList from './MusicList';
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
      <MusicList musics={musics} />
    </div>
  );
}

export default App;
