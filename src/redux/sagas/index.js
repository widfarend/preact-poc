import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'
import MessageService from '../../lib/message-service';
import * as Types from '../types';
import * as Actions from '../actions';

// const messageService = new MessageService(window.parent);




// worker Saga: will be fired on BUILDER_MODE actions
function* putBuilderMode(action) {
	try {
		const payload = yield call((payload) => {
			return messageService.send(payload);
		}, action.payload);
		yield put({type: Types.BUILDER_MODE_SUCCESS, payload: payload});
	} catch(e) {
		yield put({type: Types.BUILDER_MODE_FAILURE, error: e});
	}
}

function getMessages() {
	return eventChannel(emitter => {
		window.addEventListener('message', (message) => {
			emitter(message);
        });

		return () => window.removeEventListener('message');
	});
}

function* mySaga() {
	const chan = yield call(getMessages);
    yield takeLatest(Types.BUILDER_MODE_REQUESTED, putBuilderMode);

    try {
		while(true) {
            let messages = yield take(chan);
            console.log(messages.data);
            if(messages && messages.data && messages.data.eventName) {
                yield put(Actions[messages.data.eventName](messages.data.payload));
			}
		}
	} finally {
		console.log('Ended');
	}


}

export default mySaga;