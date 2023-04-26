import React from "react";
import "./PageTitle.scss";

interface PageTitleViewProps {
  title: string;
}

const PageTitleView: React.FC<PageTitleViewProps> = ({ title }) => {
  return <div className="pageTitle">{title}</div>;
};

export default PageTitleView;
