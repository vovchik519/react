import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img
          src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
          alt="logo"
        />
      </header>
      <aside className="aside">
        <ul>
          <li>
            <a href="#!"></a>Home
          </li>
          <li>
            <a href="#!"></a>Portfolio
          </li>
          <li>
            <a href="#!"></a>Post
          </li>
          <li>
            <a href="#!"></a>Setting
          </li>
          <li>
            <a href="#!"></a>Contact
          </li>
        </ul>
      </aside>
      <main className="main__profile">
        <div className="profile__image-top">
          <img src="#!" alt="фон" />
        </div>
        <div className="profile__info-wrapper">
          <img src="#!" alt="фото" />
          <div className="profile-info">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eaque!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
