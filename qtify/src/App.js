import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import SearchBar from "./components/SearchBar/SearchBar";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SearchBar /> */}
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </div>
  );
}

export default App;
