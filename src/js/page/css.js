import React from 'react';
import Header from './../component/global/header';
import Instruction from './../component/instruction';
import sortCss from '../script/css';
import '../../scss/page/css.scss';

class Css extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            instruction: [
                'Enter CSS/SCSS/SASS into the <textarea />',
                'The <pre /> will update with the new sorting'
            ],
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
                <Instruction instruction={this.state.instruction} />

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
