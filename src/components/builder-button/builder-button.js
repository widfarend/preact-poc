import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import style from './builder-button.css';

import { builderMode } from '../../redux/actions';

class BuilderButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			builderMode: props.builderMode
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('RECEIVED PROPS!!');
		this.setState({builderMode: nextProps.builderMode});
	}

	render() {
		return (<div className={style.builderButton}>
			<pre>Mode: {JSON.stringify(this.state, null, 2)}</pre>
			<button
				onClick={() => this.props.onBuilderModeClicked(!this.state.builderMode)}
			>{this.state.builderMode ? 'Disable' : 'Enable'}</button>
		</div>);
	}
}

export default connect((state) => {
	console.log(state);
	return ({builderMode: state.builderMode});
}, (dispatch) => ({ onBuilderModeClicked: (mode) => dispatch( builderMode(mode))}))(BuilderButton);