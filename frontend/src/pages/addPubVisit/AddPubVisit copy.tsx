import React, { useState } from "react";
import { addPubVisit } from "../../redux/UserSlice";

interface PubVisit {
  pubName: string;
  visitDate: Date;
  rating: number;
  comment: string;
}

const Wrong: React.FC = () => {
  const [pubName, setPubName] = useState("");
  const [visitDate, setVisitDate] = useState<Date | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const pubVisit: PubVisit = {
      pubName,
      visitDate: visitDate!,
      rating: rating!,
      comment,
    };

    console.log(pubVisit);
  };

  return (
    <div>
      <h1>Pub Review Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pubName">Pub Name:</label>
        <input
          type="text"
          id="pubName"
          value={pubName}
          onChange={(event) => setPubName(event.target.value)}
        />

        <label htmlFor="visitDate">Visit Date:</label>
        <input
          type="date"
          id="visitDate"
          value={visitDate ? visitDate.toISOString().slice(0, 10) : ""}
          onChange={(event) => setVisitDate(new Date(event.target.value))}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          value={rating || ""}
          onChange={(event) => setRating(Number(event.target.value))}
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Wrong;
