import AngRe from './angre';

class MessageService extends AngRe {
	constructor(target) {
		super(target);
	}

	send(payload) {
		console.log(`[Atom Service] enable template builder: ${payload}`);
		this._sendMessage('EnableTemplateBuilderAction', 'AtomAction', payload, true);
	}
}

export default MessageService;