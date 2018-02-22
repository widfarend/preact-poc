import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import style from './canvas.css';

import List from '../list';
import BuilderButton from '../builder-button';

class Canvas extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: props.articles
		};

		console.log('Style: ', style);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({articles: nextProps.articles});
	}

	render() {
		return (
			<div className={style.canvas}>
				<List />
				<BuilderButton />
			</div>
		);
	}
}

export default connect((state) => ({articles: state.articles}))(Canvas);