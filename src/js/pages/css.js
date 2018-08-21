import React from 'react';
import Header from './../header';
import sortCss from './../scripts/css';
import './../../scss/pages/css.scss';

class Css extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newText = sortCss(event.target.value);
        this.setState({ text: newText });
    }

    render() {
        return (
            <div>
                <Header pageName="Css" />

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
