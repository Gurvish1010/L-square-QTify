import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import LeftArrow from "../Carousel/LeftArrow";
import RightArrow from "../Carousel/RightArrow";
import "./NewAlbums.css"; // optional, can reuse TopAlbums.css

function NewAlbums() {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false); // false → carousel, true → grid

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleToggle = () => setShowAll(!showAll);

  const button = (
    <button className="collapse-btn" onClick={handleToggle}>
      {showAll ? "Collapse" : "Show All"}
    </button>
  );

  return (
    <Section title="New Albums" button={button}>
      {showAll ? (
        
        <div className="section-grid show-all-grid">
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      ) : (
        // Default: cyclic carousel with arrows
        <Carousel
          items={albums}
          renderItem={(album) => (
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          )}
          leftNav={<LeftArrow />}
          rightNav={<RightArrow />}
          loop={true} // cyclic
        />
      )}
    </Section>
  );
}

export default NewAlbums;