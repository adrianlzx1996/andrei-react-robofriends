import React from "react";
import Card from "./Card";
import { shallow, mount, render } from "enzyme";

it("expect to render one Card component", () => {
	expect(shallow(<Card />).length).toEqual(1);
});

it("expect to render Card component Snapshot", () => {
	expect(shallow(<Card />)).toMatchSnapshot();
});
