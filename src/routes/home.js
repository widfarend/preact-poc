import { h, Component } from 'preact';
import MessageService from "../lib/message-service";

class Home extends Component {

	constructor() {
		super();

		this.state = { blah: 'hello', templateBuilder: false };
		this.messageService = new MessageService(window.parent);

		this.messageService.send(this.state.templateBuilder);
	}

	clicked = () => {
		console.log('I got clicked');
		// this.messageService = new MessageService(window.parent);
		this.setState({templateBuilder: !this.state.templateBuilder});
		this.messageService.send(this.state.templateBuilder);

		console.log('Da! ', this.state);
	};

	render() {
		return(
			<div>
				<pre>Welcome to the &lt;Insert New Project Name Here&gt; app.</pre>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
				<div style="left: 50%; top: 25%"><button onClick={this.clicked} style="width: 100px; left:-50px;">{this.state.templateBuilder ? 'Disable' : 'Enable'}</button></div>
			</div>
		);
	}
}

export default Home;