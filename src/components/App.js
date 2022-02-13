import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import List from "./List";
import Theme from "../config.json";
import Alaska from "../assets/Alaska.jpg";
import Autumn from "../assets/Autumn.jpg";
import Cyberpunk from "../assets/Cyberpunk.jpg";
import Music from "../assets/Music.jpg";

const App = () => {
  const [themeType, setThemeType] = useState("");

  useEffect(() => {
    switch (Theme.theme) {
      case "Alaska":
        setThemeType(Alaska);
        break;
      case "Autumn":
        setThemeType(Autumn);
        break;
      case "Cyberpunk":
        setThemeType(Cyberpunk);
        break;
      case "Music":
        setThemeType(Music);
        break;
      default:
        break;
    }
  }, []);

  return (
    <main
      className="h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${themeType})` }}
    >
      <Profile username={Theme.username} />
      <List links={Theme.links} />
    </main>
  );
};

export default App;
