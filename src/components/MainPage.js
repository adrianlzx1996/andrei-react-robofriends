import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./MainPage.css";
import Scroll from "../components/Scroll";
import Header from "../components/Header";

function MainPage(props) {
	const { searchField, onSearchChange, onRequestRobots, isPending, robots } =
		props;

	useEffect(() => {
		onRequestRobots();
	}, [onRequestRobots]);

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div className="tc">
			<Header />
			<SearchBox searchChange={onSearchChange} />
			{isPending ? (
				<h1>Loading</h1>
			) : (
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			)}
		</div>
	);
}

export default MainPage;
