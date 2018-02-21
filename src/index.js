import { h, render } from 'preact';
import App from './app/app';

// Redux
import { Provider } from 'preact-redux';
import store from './redux/store';
import { addArticle } from './redux/actions';

window.store = store;
window.addArticle = addArticle;

render((
	<div id="root">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
