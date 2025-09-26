import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import LeftArrow from "../Carousel/LeftArrow";
import RightArrow from "../Carousel/RightArrow";
import { Tabs, Tab } from "@mui/material";
import "./Songs.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err));

    
    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data)) 
      .catch((err) => console.error(err));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  // Filtering logic
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre?.key === selectedGenre);

  return (
    <Section title="Songs">
      
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        className="songs-tabs"
      >
        
        <Tab key="all" label="All" value="all" />
        
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      
      {filteredSongs.length === 0 ? (
        <p style={{ color: "#fff" }}>No songs available for this genre.</p>
      ) : (
        <Carousel
          items={filteredSongs}
          renderItem={(song) => (
            <Card
              key={song.id}
              image={song.image}
              title={song.title}
              likes={song.likes}
              type="song"
            />
          )}
          leftNav={<LeftArrow />}
          rightNav={<RightArrow />}
          loop={filteredSongs.length > 6}
        />
      )}
    </Section>
  );
}

export default Songs;