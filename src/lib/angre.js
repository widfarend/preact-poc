import store from '../redux/store';
import * as Actions from '../redux/actions';

class AngRe {
	constructor(target) {
		this._setTarget(target);
		this._startEventListener();
	}

	_setTarget(target) {
		this._target = target;
	}

	_startEventListener() {
		console.log('Starting event listener');
		window.addEventListener('message', this._receiveMessage.bind(this), false);
	}

	_receiveMessage(messageEvent) {
		console.log(`[${messageEvent.data.eventName} : payload: ${messageEvent.data.payload}`);
		if(messageEvent && messageEvent.data && messageEvent.data.fromBatwing && Actions[messageEvent.data.eventName]) {
			store.dispatch(Actions[messageEvent.data.eventName](messageEvent.data.payload));
		}
	}

	_sendMessage(eventName, action, payload, postMessage = false) {
		try {
			if(this._target && postMessage) {
				this._target.postMessage({
					fromBatwing: true,
					serviceName: this.constructor.name,
					action: action,
					eventName: eventName,
					payload: payload
				}, '*');
			}

			return true;
		} catch(e) {
			console.log(`Error posting message to ${this._target}`, JSON.stringify(e, null, 2));
			return false;
		}

	}

}

export default AngRe;