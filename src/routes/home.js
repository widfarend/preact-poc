import { h, Component } from 'preact';
import MessageService from "../lib/message-service";

import Canvas from '../components/canvas';

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
			<Canvas/>
		);
	}
}

export default Home;