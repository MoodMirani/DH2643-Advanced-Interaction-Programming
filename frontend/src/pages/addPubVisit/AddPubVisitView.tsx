import React, { FC, useState } from "react";
import "./AddPubVisit.scss";
import InputField from "../../components/input/InputFieldView";
import PageTitleView from "../../components/pagetitle/PageTitleView";
import Spinner from "../../components/spinner/Spinner";

interface AddPubVisitViewProps {
  values: PubVisit;
  introText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitClick: () => void;
}

export interface PubVisit {
  pubName: string;
  visitDate: string;
  review: number;
  comment: string;
}

const AddPubVisitView: FC<AddPubVisitViewProps> = ({
  values,
  introText,
  handleChange,
  handleCommentChange,
  handleSubmitClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    // Perform the submit logic here

    try {
      // Simulate an asynchronous action with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Submit completed successfully
      console.log("Submit successful!");
    } catch (error) {
      // Submit failed
      console.error("Submit failed:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className="addPubVisitPage">
      <PageTitleView title="Add a pubvisit" />
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
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="submitButton" onClick={handleButtonClick}>
            Add Pubvisit
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPubVisitView;
