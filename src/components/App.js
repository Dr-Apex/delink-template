import React from "react";
import Profile from "./Profile";
import List from "./List";
import Theme from '../config.json';
import Cyberpunk from "../assets/Cyberpunk.jpg";

const App = () => {
  return (
    <main
      className="h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${Cyberpunk})` }}
    >
      <Profile username={Theme.username} />
      <List links={Theme.links} />
    </main>
  );
};

export default App;
