import React from 'react';
import "./MyVisitedPubs.scss";
import PubCard from '../card/PubCard';


export default function MyVisitedPubs() {

    const pubVisits = {
        visits: [
            {
            pubName: "Sektionen för Öppen Ingång",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Sektionen för Medieteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Konglig Datasektionen",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Elektroteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Sektionen för Öppen Ingång",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Sektionen för Medieteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Konglig Datasektionen",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Elektroteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Sektionen för Öppen Ingång",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Sektionen för Medieteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Konglig Datasektionen",
            pubReview: "Det finns ett kul hjul att snurra"
            },
            {
            pubName: "Elektroteknik",
            pubReview: "Det finns ett kul hjul att snurra"
            },

        ]

        
    }
    return (
        <div>
        <div className="visitedPubHeader">
            My Visited Pubs
        </div >

        <div className='pubsContainer'>
        {pubVisits.visits.map((visit) => <PubCard pubName={visit.pubName} pubReview={visit.pubReview}></PubCard>)}
        </div>
        </div>
    )
}