import React from "react";
import "./App.css";
import MainPage from "../components/MainPage";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

function App(props) {
	return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
