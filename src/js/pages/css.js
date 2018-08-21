import React from 'react';
import Header from './../header';
import './../../scss/pages/css.scss';

const Css = () => (
    <div>
        <Header pageName="Css" />

        <main className="main">
            <textarea placeholder="Input Content" className="input" />
            <pre className="output" />
        </main>
    </div>
);

export default Css;
