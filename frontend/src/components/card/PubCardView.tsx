// CardComponent.tsx
import React from "react";
import "./PubCard.scss";

interface PubCardProps {
  pubName?: string;
  visitDate?: string;
  review?: number;
  comment?: string;
}

const PubCard: React.FC<PubCardProps> = ({
  pubName,
  visitDate,
  review,
  comment,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{pubName}</h3>
        <div className="review-visited">
          <h4>Review: {review}/10</h4>
          <h4>Visited: {visitDate}</h4>
        </div>

        <p className="card-text">{comment}</p>
      </div>
    </div>
  );
};

export default PubCard;
