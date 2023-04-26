import React from "react";
import "./MyVisitedPubs.scss";
import PubCard from "../../components/card/PubCard";
import pubVisits from "../../assets/mock/pubvisits.json";
import PageTitle from "../../components/pageTitle/pagetitle";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

const MyVisitedPubs = () => {
  const visits = useAppSelector((state) => state.pubVisit.pubVisits);
  console.log({ visits });

  return (
    <div className="visitedPubsPageContainer">
      <PageTitle title="My Visited Pubs" />

      <div className="pubsContainer">
        {visits.map((visit) => (
          <PubCard
            pubName={visit.pubName}
            visitDate={visit.visitDate}
            review={visit.review}
            comment={visit.comment}
          ></PubCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisitedPubs;
