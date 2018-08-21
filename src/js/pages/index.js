import React from 'react';
import Header from './../header';
import IndexLink from '../components/indexlink';
import './../../scss/pages/index.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: ['css', 'html']
        };
    }

    render() {
        return (
            <div>
                <Header pageName="Index" />

                <nav className="nav">
                    {this.state.links.map((entry, i) => (
                        <IndexLink key={i} name={entry} />
                    ))}
                </nav>
            </div>
        );
    }
}

export default Index;
