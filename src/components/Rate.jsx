import emptyStar from "../assets/images/empty-star.png";
import fullStar from "../assets/images/fill-star.png";

const Rate =({ score }) => {
    const notes = [1, 2, 3, 4, 5];
    
    return (
        <div className="rate-container">
            {notes.map((note) => (
                <img
                    key={note}
                    className={`etoile ${score >= note ? 'full-star' : 'empty-star'}`}
                    src={score >= note ? fullStar : emptyStar}
                    alt={score >= note ? "full star" : "empty star"}
                />
            ))}
        </div>
    );
}

export default Rate;