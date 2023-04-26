import React, { useState } from "react";
import "./AddPubVisit.scss";
import InputField from "../../components/input/InputField";
import { useAppDispatch } from "../../hooks/hooks";
import { addPubVisit, PubVisit } from "../../redux/PubSlice";
import PageTitle from "../../components/pageTitle/pagetitle";
import { redirect } from "react-router-dom";

// import { Button } from "../../components/Button";

const initialState: PubVisit = {
  pubName: "",
  visitDate: new Date(),
  review: 2,
  comment: "",
};

const AddPubVisitPage = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useAppDispatch();

  // onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleCommentChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  console.log(values);

  const handleSubmitClick = () => {
    dispatch(addPubVisit(values));
    alert("A pubvisit was added");
  };

  const introText =
    "Welcome to our pub visit logging application! By logging your pub visits, you can keep track of your favorite pubs and review your pub experiences. Before you start logging your pub visits we kindly ask you to fill out your profile information. ";

  return (
    <div className="addPubVisitPage">
      <PageTitle title="Pub Review Page" />
      <div className="addVisitContainer">
        <p className="introText">{introText}</p>
        <InputField
          label={"Name of the pub"}
          name="pubName"
          onChange={handleChange}
        />
        <InputField
          type="date"
          label={"What date did you visit this pub?"}
          name="visitDate"
          onChange={handleChange}
        />
        <InputField
          type="range"
          label={"How did you find your experience? Slide the bar to the right"}
          name="review"
          onChange={handleChange}
          min="1"
          max="10"
          value={values.review}
        />

        <div className="commentDesc">Do you have any comments?</div>
        <textarea name="comment" onChange={handleCommentChange} />
        <div className="submitButton" onClick={handleSubmitClick}>
          Add Pubvisit
        </div>
      </div>
    </div>
  );
};

export default AddPubVisitPage;
