import React from "react";
import "./MyVisitedPubs.scss";
import PubCard from "../../components/card/PubCard";
import pubVisits from "../../assets/mock/pubvisits.json";

const MyVisitedPubs = () => {
  const visits = pubVisits.pubVisits;

  return (
    <div>
      <div className="visitedPubHeader">My Visited Pubs</div>

      <div className="pubsContainer">
        {visits.map((visit) => (
          <PubCard
            pubName={visit.pubName}
            pubReview={visit.pubReview}
          ></PubCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisitedPubs;
