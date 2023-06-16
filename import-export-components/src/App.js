import './App.css';
import Gallery from './Gallery.js';
import { NewsfeedPost } from './Profile.js';

function App() {
  return (
    <div className="App">
      <Gallery />
      <NewsfeedPost nfPost="Post from the root file" />
    </div>
  );
}

export default App;
