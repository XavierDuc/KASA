import React from 'react';
import emptyStar from "../assets/images/star-inactive 1.png";
import fullStar from "../assets/images/Vector.png";

function Rate({ score }) {
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