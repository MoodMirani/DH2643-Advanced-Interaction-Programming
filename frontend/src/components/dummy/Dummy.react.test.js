import React from "react";
import jestRenderer from 'react-test-renderer';
import { Dummy } from "./Dummy";

test("The component should render our test if the prop is true", () => {
    const component = jestRenderer.create(
        <Dummy shouldRenderText={true} text="Hello World" />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
