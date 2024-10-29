import AppsData from "../appartement.json";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rate from "../components/Rate";



const AppsDisplay = () => {
  const { id } = useParams();
  
  const ficheApps = AppsData.find((logement) => logement.id === id);

  const equipements = ficheApps?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  if (!ficheApps) {
    return <Navigate to="/404" />;
  }

  return (
   
    <main>
      <div className="fiche-container">
        {/* Carousel/Image section */}
        <Carrousel slides={ficheApps.pictures} />
        {/* Title and host info section */}
        <section className="fiche-logement">
          <div className="description-info">
            <div className="description-info__titletags">
              <div className="description-info__titletags__title">
                <h1>{ficheApps.title}</h1>
                <p>{ficheApps.location}</p>
                {/* Tags */}
                <div className="tags">
                  {ficheApps.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Host info */}
            <div className="host-rating">
              <div className="host">
                <p>{ficheApps.host.name}</p>
                <img src={ficheApps.host.picture} alt={ficheApps.host.name} />
              </div>
              {/* Rating */}
              <div className="rating">
              <Rate score={Number(ficheApps.rating)} />
              </div>
            </div>
          </div>

          {/* Description and Equipment sections */}
          <div className="collapse-container">
            <div className="collapse-fiche">
              <Collapse title="Description" content={ficheApps.description}/>
            </div>
            <div className="collapse-fiche">
              <Collapse title="Équipements" content={equipements}/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AppsDisplay;