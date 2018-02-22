import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import MessageService from '../../lib/message-service';
import * as Types from "../types";

// worker Saga: will be fired on BUILDER_MODE actions
function* putBuilderMode(action) {
	try {
		const payload = yield call((payload) => {
			let messageService = new MessageService(window.parent);
			return messageService.send(payload);
		}, action.payload);
		yield put({type: Types.BUILDER_MODE_SUCCESS, payload: payload});
	} catch(e) {
		yield put({type: Types.BUILDER_MODE_FAILURE, error: e});
	}
}

function* mySaga() {
	yield takeLatest(Types.BUILDER_MODE_REQUESTED, putBuilderMode);
}

export default mySaga;