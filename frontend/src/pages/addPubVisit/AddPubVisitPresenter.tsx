// AddPubVisitPresenter.tsx
import React, { useState, FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addPubVisit, PubVisit } from "../../redux/PubSlice";
import AddPubVisitView from "./AddPubVisitView";

const initialState: PubVisit = {
  pubName: "",
  visitDate: "",
  review: 5,
  comment: "",
};

const AddPubVisitPresenter: FC = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useAppDispatch();

  // onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
    <AddPubVisitView
      values={values}
      introText={introText}
      handleChange={handleChange}
      handleCommentChange={handleCommentChange}
      handleSubmitClick={handleSubmitClick}
    />
  );
};

export default AddPubVisitPresenter;
