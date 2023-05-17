// MyVisitedPubsView.tsx
import React, { FC } from "react";
import "./MyVisitedPubs.scss";
import PubCardView from "../../components/card/PubCardView";
import PageTitleView from "../../components/pagetitle/PageTitleView";

interface PubVisit {
  pubName: string;
  visitDate: string;
  review: number;
  comment: string;
}

interface MyVisitedPubsViewProps {
  visits: PubVisit[];
}

const MyVisitedPubsView: FC<MyVisitedPubsViewProps> = ({ visits }) => {
  return (
    <div className="visitedPubsPageContainer">
      <PageTitleView title="My Visited Pubs" />

      <div className="pubsContainer">
        {visits.map((visit, index) => (
          <PubCardView
            key={index}
            pubName={visit.pubName}
            visitDate={visit.visitDate}
            review={visit.review}
            comment={visit.comment}
          ></PubCardView>
        ))}
      </div>
    </div>
  );
};

export default MyVisitedPubsView;
