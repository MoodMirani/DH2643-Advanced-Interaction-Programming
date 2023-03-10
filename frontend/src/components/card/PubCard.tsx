import React from "react";
import "./PubCard.scss";

interface PubCardProps {
    pubName: string;
    pubReview: string;
  }

const PubCard = ({pubName, pubReview}: PubCardProps) => {

    return(
        <div className="cardContainer">
            <div className="pubName">
                {pubName}
            </div>
            <div className="pubReview">
                {pubReview}
            </div>
        </div>
    )

}

export default PubCard;
   