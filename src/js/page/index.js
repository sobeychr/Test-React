import React from 'react';
import Header from './../component/global/header';
import IndexLink from '../component/indexlink';
import '../../scss/page/index.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: ['css', 'html', 'timestamp']
        };
    }

    render() {
        return (
            <div>
                <Header pageName="Index" />

                <main className="main">
                    {this.state.links.map((entry, i) => (
                        <IndexLink key={i} name={entry} />
                    ))}
                </main>
            </div>
        );
    }
}

export default Index;
