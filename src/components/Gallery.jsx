import { Link } from "react-router-dom";
import appartements from "../appartement.json";
import Card from "../components/Cards";

const Gallery = () => {
  return (
    <div className="gallery">
      {appartements.map((appartement) => {
        return (
          <article key={appartement.id}>
            <Link to={`/Logement/${appartement.id}`}>
              <Card image={appartement.cover} title={appartement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;