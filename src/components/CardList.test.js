import React from "react";
import CardList from "./CardList";
import { shallow, mount, render } from "enzyme";
import { robots } from "../robots";

it("expect to render CardList component Snapshot", () => {
	const mockRobots = robots;
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
