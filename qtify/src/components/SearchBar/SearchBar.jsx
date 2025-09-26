import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  // Fetch all songs once
  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter songs based on query
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredSongs([]);
      return;
    }

    const filtered = songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [query, songs]);

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search a song of your choice"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      {/* Suggestions dropdown */}
      {filteredSongs.length > 0 && (
        <div className="search-suggestions">
          {filteredSongs.map((song) => (
            <div key={song.id} className="suggestion-item">
              <img src={song.image} alt={song.title} />
              <span>{song.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;