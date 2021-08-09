import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/:id">
						<Detail />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
