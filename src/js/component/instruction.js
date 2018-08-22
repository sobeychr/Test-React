import React from 'react';
import CollapseIcon from './../component/collapseicon';
import './../../scss/component/instruction.scss';

class Instruction extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            open: true
        };
    }

    handleClick() {
        const newOpen = !this.state.open;
        this.setState({ open: newOpen });
    }

    render() {
        let classDisplay = 'section';
        if (!this.state.open) {
            classDisplay += ' section--close';
        }

        return (
            <aside className="aside instruction">
                <h2
                    className="aside__title collapse__parent"
                    onClick={this.handleClick}
                >
                    <CollapseIcon open={this.state.open} direction="down" />
                    Instructions
                </h2>
                <section className={classDisplay}>
                    <ol className="instruction">
                        {this.props.instruction.map((entry, i) => (
                            <li key={i}>{entry}</li>
                        ))}
                    </ol>
                </section>
            </aside>
        );
    }
}

export default Instruction;
