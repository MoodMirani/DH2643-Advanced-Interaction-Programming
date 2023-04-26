// CardComponent.tsx
import React from "react";
import "./PubCard.scss";

interface PubCardProps {
  pubName?: string;
  visitDate?: Date;
  review?: number;
  comment?: string;
}

const PubCard: React.FC<PubCardProps> = ({
  pubName,
  visitDate,
  review,
  comment,
}) => {
  console.log(review);
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{pubName}</h3>
        <h4>Review: {review}/10</h4>
        <p className="card-text">{comment}</p>
      </div>
    </div>
  );
};

export default PubCard;
