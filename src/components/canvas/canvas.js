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

const template = {
    element: [
        {
            id: 1,
            name: 'rectangle',
            style: {
                top: '400px',
                left: '20px',
                width: '30%',
                height: '10%',
                border_style: 'solid',
                border_color: 'blue',
                border_width: '1px',
                padding: '5px',
                background_color: 'green'
            }
        },
        {
            id: 2,
            name: 'square',
            style: {
                top: '40px',
                left: '240px',
                width: '100px',
                height: '100px',
                border_style: 'solid',
                border_color: 'green',
                border_width: '2px',
                padding: '5px',
                background_color: 'red'
            }
        },
        {
            id: 3,
            name: 'square',
            style: {
                top: '60px',
                left: '360px',
                width: '50px',
                height: '50px',
                border_style: 'dotted',
                border_color: 'purple',
                border_width: '2px',
                padding: '5px',
                background_color: 'blue'
            }
        },
        {
            id: 4,
            name: 'square',
            style: {
                top: '80px',
                left: '460px',
                width: '30px',
                height: '30px',
                border_style: 'dashed',
                border_color: 'blue',
                border_width: '2px',
                padding: '5px',
                background_color: 'orange'
            }
        },
        {
            id: 5,
            name: 'circle',
            style: {
                border_radius: '50px',
                top: '280px',
                left: '460px',
                width: '50px',
                height: '50px',
                border_style: 'dashed',
                border_color: 'blue',
                border_width: '2px',
                padding: '5px',
                background_color: 'orange'
            }
        }
    ]
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
        let canvasElements = [];

        template.element.forEach(element => {
            canvasElements.push(<div style={this.convertStyle(element.style)}>Hello</div>)
        });

        // return [
        //     <div style="position: absolute; top: 40px; left: 240px; background: red; width: 100px; height: 100px; border: solid 2px green;">hello</div>,
        //     <div style="position: absolute; top: 60px; left: 360px; background: blue; width: 50px; height: 50px; border: solid 2px purple;">hello</div>,
        //     <div style="position: absolute; top: 80px; left: 460px; background: orange; width: 30px; height: 30px; border: solid 2px blue;">hello</div>,
        //     <BuilderButton />,
        // ];

        return canvasElements;
    }

    convertStyle(JSONStyle) {
        let CSSString = 'position: absolute; ';
        Object.keys(JSONStyle).forEach((key) => {
            CSSString = CSSString + key.replace('_', '-');
            CSSString = CSSString + ': ' + JSONStyle[key] + '; ';
        });

        return CSSString;
    }

    render() {
        let shapes = this.buildCanvas();

		// let convStyle = this.convertStyle(template.element[0].style);
		// console.log('*******************8', convStyle);
		//
		// shapes.push(<div style={convStyle}>hello</div>);
        return (
            <div className={style.canvas}>
                {shapes}
                <List/>
            </div>
        );
    }
}

export default connect((state) => ({articles: state.articles}))(Canvas);