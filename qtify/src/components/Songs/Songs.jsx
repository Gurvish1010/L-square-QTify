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
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genreTabs = ["All", "Rock", "Pop", "Jazz", "Blues"];

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter(
          (song) =>
            song.genre?.name &&
            song.genre.name.toLowerCase().trim() === selectedGenre.toLowerCase()
        );

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
        {genreTabs.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      {filteredSongs.length === 0 ? (
        <p style={{ color: "#fff" }}>No songs available for this genre.</p>
      ) : (
        <Carousel
          items={filteredSongs}
          renderItem={(song) => (
            <Card
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