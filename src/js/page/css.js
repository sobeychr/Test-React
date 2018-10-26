import React from 'react';
import Header from './../component/global/header';
import Instruction from './../component/instruction';
import { CCssSort, sortCss } from '../script/css';
import '../../scss/component/global/aside.scss';
import '../../scss/page/css.scss';

class Css extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        let cssOrder = (
            <div className="instruction__sort">
                <span className="instruction__sort__title">
                    Here is the sort order:
                </span>
                <ol className="instruction__sort__list">
                    {CCssSort.order.map((entry, i) => (
                        <li key={i} className="instruction__sort__list__entry">
                            {entry}
                        </li>
                    ))}
                </ol>
            </div>
        );

        this.state = {
            instruction: [
                'Enter CSS/SCSS/SASS into the <textarea />',
                'The <pre /> will update with the new sorting'
            ],
            cssOrder: cssOrder,
            text: ''
        };
    }

    handleChange(event) {
        const newText = sortCss(event.target.value);
        this.setState({ text: newText });
    }

    render() {
        return (
            <div>
                <Header pageName="Css" />
                <Instruction
                    instruction={this.state.instruction}
                    text={this.state.cssOrder}
                />

                <main className="main">
                    <textarea
                        placeholder="Input Content"
                        className="input"
                        onChange={this.handleChange}
                    />
                    <pre className="output">{this.state.text}</pre>
                </main>
            </div>
        );
    }
}

export default Css;
