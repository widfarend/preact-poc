import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

// Routes
import Home from '../routes/home';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<AsyncRoute
						path="/"
						component={Home}
						/>
					<AsyncRoute
						path="/render"
						component={Home}
						/>
				</Router>
			</div>
		);
	}
}

export default App;

