import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { connect } from 'preact-redux';
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
					<AsyncRoute
						path="/load"
						component={Home}
					/>
				</Router>
			</div>
		);
	}
}

function select({ app }) {
	return { ...app };
}

export default connect(select)(App);

