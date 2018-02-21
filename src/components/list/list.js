import {h, Component} from 'preact';
import {connect} from 'preact-redux';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: props.articles
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log(JSON.stringify(this.state, null, 2));
		this.setState({articles: nextProps.articles});
	}

	render() {
		return (<div>
			<ul className={'list-group list-group-flush'}>
				{this.state.articles.map((el, index) => (
					<li className="list-group-item" key={el.id+index}>
						{el.title}
					</li>
				))}
			</ul>
		</div>);
	}
}

export default connect((state) => ({articles: state.articles}))(List);