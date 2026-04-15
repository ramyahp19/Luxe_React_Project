import { useEffect, useState } from "react";

export default function Tutorials() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tutorials")
      .then(res => res.json())
      .then(setVideos);
  }, []);

  return (
    <div className="grid">
      {videos.map(v => (
        <div className="video-card" key={v.id}>
          <img src={v.thumbnail} />
          <div className="overlay">
            <h3>{v.title}</h3>
            <a href={v.url} target="_blank">▶ Watch</a>
          </div>
        </div>
      ))}
    </div>
  );
}