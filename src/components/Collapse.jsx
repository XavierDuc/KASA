import { useState } from 'react';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse-item">
            <button 
                className={`collapse-button ${isOpen ? 'collapse-button--open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="collapse-title">{title}</span>
                <span className={`collapse-arrow ${isOpen ? 'collapse-arrow--open' : ''}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7897 0.789662L0.789662 10.7897C0.28334 11.296 0.28334 12.1045 0.789662 12.6108C1.29598 13.1171 2.10445 13.1171 2.61077 12.6108L12.0001 3.22142L21.3894 12.6107C21.8957 13.117 22.7042 13.117 23.2105 12.6107C23.7168 12.1044 23.7168 11.2959 23.2105 10.7896L13.2105 0.789562C12.7042 0.283241 11.8957 0.283241 10.7897 0.789662Z" fill="white"/>
                    </svg>
                </span>
            </button>
            <div className={`collapse-content ${isOpen ? 'collapse-content--open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;