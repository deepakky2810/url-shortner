import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routing/routes";

const App = () => (
	<Router>
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.map}
					exact={route.exact}
					path={route.path}
					element={<route.component />}
				/>
			))}
		</Routes>
	</Router>
);

export default App;
