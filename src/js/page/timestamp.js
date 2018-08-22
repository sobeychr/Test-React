import React from 'react';
import Header from './../component/global/header';
import '../../scss/page/timestamp.scss';

class Timestamp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header pageName="Timestamp" />

                <main className="main">
                    <h1>Timestamp</h1>
                </main>
            </div>
        );
    }
}

export default Timestamp;
