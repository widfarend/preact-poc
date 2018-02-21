import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

// Utils
import MessageService from '../lib/message-service';

// Components
import List from '../components/list';

// Routes
import Home from '../routes/home';

class App extends Component {
	componentDidMount() {
		console.log('Mounted');
		this.messageService = new MessageService(window);
		this.messageService.send({'dunno': 'dunno'});
	}

	render() {
		return (
			<div>
				<List />
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

