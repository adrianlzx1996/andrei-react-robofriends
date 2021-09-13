import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";

let wrapper, wrapper2;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: "",
		isPending: false,
	};
	wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
	expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: "John",
				email: "john@gmail.com",
			},
		],
		searchField: "a",
		isPending: false,
	};
	wrapper2 = shallow(<MainPage {...mockProps} />);
	// expect(wrapper2.instance().filterRobots([])).toEqual([]);
	// expect(wrapper.instance().filterRobots([])).toEqual([]);
});
