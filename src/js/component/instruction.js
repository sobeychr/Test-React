import React from 'react';
import CollapseIcon from './../component/collapseicon';
import './../../scss/component/instruction.scss';

const Instruction = ({ instruction }) => (
    <aside className="aside">
        <h2 className="aside__title collapse__parent">
            <CollapseIcon direction={'down'} />
            Instructions
        </h2>
        <ol className="instruction">
            {instruction.map((entry, i) => (
                <li key={i}>{entry}</li>
            ))}
        </ol>
    </aside>
);

export default Instruction;
