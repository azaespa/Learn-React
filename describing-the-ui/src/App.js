import './App.css';

function App() {
  return (
    <section className="App">
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function Profile() {
  return (
    <div className="feed-post">
      <div className="person-info">
        <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        />
        <div className="text-info">
          <h2>Katherine Johnson</h2>
          <p>Posted 5 mins ago</p>
        </div>
        <h2 className="options">...</h2>
      </div>
      <div className="post-info">
        <p>I am learning React!</p>
      </div>
    </div>
  );
}

export default App;
