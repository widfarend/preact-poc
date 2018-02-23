import AngRe from './angre';

let _instance = null;

class MessageService extends AngRe {
	constructor(target) {
		super(target);
		if(!_instance) {
			console.log('We have an instance!');
			_instance = this;
		}

		return this._instance;
	}

	send(payload) {
		console.log(`[Atom Service] enable template builder: ${payload}`);
		this._sendMessage('EnableTemplateBuilderAction', 'AtomAction', payload, true);
		return payload;
	}
}

export default MessageService;