import {h, Component} from 'preact';
import {connect} from 'preact-redux';

class Empty extends Component {
	constructor(props) {
		super(props);

	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (<div>
			<p>Empty component</p>
		</div>);
	}
}

export default connect((state) => (state))(Empty);