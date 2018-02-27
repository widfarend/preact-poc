import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import style from './canvas.css';

import List from '../list';
import BuilderButton from '../builder-button';

const square = {
    style: {
        width: '10%',
        height: '10%',
        border_colour: '#F00'
    },
    id: 'square',
    type: 'shape'
};


class Canvas extends Component {
    constructor(props) {
        super(props);

        const shapes = [];
        shapes.push(square);
        shapes.push(square);

        this.state = {
            articles: props.articles,
            shapes: shapes
        };

        console.log('Style: ', style);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({articles: nextProps.articles});
    }

    buildComponent() {

    }

    buildCanvas() {
        return [
            <div style="position: absolute; top: 40px; left: 40px; background: red; width: 100px; height: 100px; border: solid 2px green;">hello</div>,
            <div style="position: absolute; top: 60px; left: 160px; background: blue; width: 50px; height: 50px; border: solid 2px purple;">hello</div>,
            <div style="position: absolute; top: 80px; left: 260px; background: orange; width: 30px; height: 30px; border: solid 2px blue;">hello</div>,
            <BuilderButton />,
            <BuilderButton />,
            <BuilderButton />,
        ];
    }

    render() {
        let shapes = this.buildCanvas();
        return (
            <div className={style.canvas}>
                {shapes}
                <List/>
                <BuilderButton/>
            </div>
        );
    }
}

export default connect((state) => ({articles: state.articles}))(Canvas);