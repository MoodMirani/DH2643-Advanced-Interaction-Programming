import React from "react";
import "./PageTitleStyles.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <div className="pageTitle">{title}</div>;
};

export default PageTitle;
