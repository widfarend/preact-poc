import { h, render } from 'preact';
import App from './app/app';

// Redux
import { Provider } from 'preact-redux';
import storeDebug from './redux/store';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import {addArticle, builderMode} from './redux/actions';
import * as Actions from './redux/actions';
import reducer from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

window.storeDebug = storeDebug;
window.actions = Actions;

render((
	<div id="root">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
