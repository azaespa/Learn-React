import { Profile, NewsfeedPost } from './Profile.js';

function Gallery() {
    return (
      <div className="App">
        <Profile />
        <NewsfeedPost nfPost="This is my very 1st update!"/>
        <NewsfeedPost nfPost="Oh wow!"/>
        <NewsfeedPost nfPost="I am learning React!"/>
      </div>
    );
  }

  export default Gallery;