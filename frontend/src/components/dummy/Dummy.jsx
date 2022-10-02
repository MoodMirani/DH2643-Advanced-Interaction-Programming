import React from "react";

export const Dummy = ({shouldRenderText, text}) => {

    return shouldRenderText && <div>{text}</div>

}