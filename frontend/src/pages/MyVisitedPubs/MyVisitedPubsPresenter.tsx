// MyVisitedPubsPresenter.tsx
import React, { FC } from "react";
import MyVisitedPubsView from "./MyVisitedPubsView";
import mockPubVisits from "../../assets/mock/pubvisits.json";
import { useAppSelector } from "../../hooks/hooks";

interface PubState {
  pubVisit: {
    pubVisits: any[];
  };
}

const MyVisitedPubsPresenter: FC = () => {
  const mockVisits = mockPubVisits.pubVisits;
  let visits = useAppSelector((state: PubState) => state.pubVisit.pubVisits);
  visits = visits.concat(mockVisits);

  return <MyVisitedPubsView visits={visits} />;
};

export default MyVisitedPubsPresenter;
