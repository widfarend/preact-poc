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
		if(this.target && postMessage)
		this.target.postMessage({
				fromBatwing: true,
				serviceName: this.constructor.name,
				action: action,
				eventName: eventName,
				payload: payload
			}, '*');
	}
}

export default AngRe;