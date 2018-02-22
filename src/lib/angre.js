class AngRe {
	constructor(target) {
		this._setTarget(target);
		this._startEventListener();
	}

	_setTarget(target) {
		this.target = target;
	}

	_startEventListener() {
		window.addEventListener('message', (messageEvent) => {
			this._receiveMessage(messageEvent);
		}, false);
	}

	_receiveMessage(messageEvent) {
		console.log(messageEvent);
	}

	_sendMessage(eventName, action, payload, postMessage = false) {
		try {
			if(this.target && postMessage) {
				this.target.postMessage({
					fromBatwing: true,
					serviceName: this.constructor.name,
					action: action,
					eventName: eventName,
					payload: payload
				}, '*');
			}

			return true;
		} catch(e) {
			console.log(`Error posting message to ${this.target}`, JSON.stringify(e, null, 2));
			return false;
		}

	}
}

export default AngRe;