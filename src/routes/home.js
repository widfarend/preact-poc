import { h, Component } from 'preact';
import MessageService from "../lib/message-service";

import Canvas from '../components/canvas';

class Home extends Component {

	constructor() {
		super();

		this.state = { blah: 'hello', templateBuilder: false };
		this.messageService = new MessageService(window.parent);

		// this.messageService.send(this.state.templateBuilder);
	}

	render() {
		return(
			<Canvas/>
		);
	}
}

export default Home;