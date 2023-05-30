// AddPubVisitPresenter.tsx
import React, { useState, FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addPubVisit, PubVisit } from "../../redux/PubSlice";
import AddPubVisitView from "./AddPubVisitView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState: PubVisit = {
  pubName: "",
  visitDate: "",
  review: 5,
  comment: "",
};

const AddPubVisitPresenter: FC = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
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
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPubVisitClick = () => {
    setIsLoading(true);
    axios
      .put("https://localhost:8080/api/pub_visits", {
        user_id: localStorage.getItem("userID"),
        pubName: values.pubName,
        visitDate: values.visitDate,
        review: values.review,
        comment: values.comment,
      })
      .then(() => {
        dispatch(addPubVisit(values));
        navigate("/visitedPubs");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Failed to add pubvisit, please try again and make sure to fill all the fields"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const introText =
    "This form allows you to log your pub visits, providing essential information about the experience. You can input the name of the pub, the date of the visit, rate your overall experience on a scale of 1 to 10, and add any additional comments you may have. After submitting the form, the pub visit details will be added to your list of visited pubs, making it easy for you to keep track of and review your favorite establishments.";
  return (
    <AddPubVisitView
      values={values}
      introText={introText}
      handleChange={handleChange}
      handleCommentChange={handleCommentChange}
      handleAddPubVisitClick={handleAddPubVisitClick}
      isLoading={isLoading}
    />
  );
};

export default AddPubVisitPresenter;
