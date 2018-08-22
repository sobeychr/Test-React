import React from 'react';
import Header from './../component/global/header';
import '../../scss/page/youtube.scss';

class Youtube extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header pageName="Index" />

                <main className="main">
                    <h1>YouTube</h1>
                </main>
            </div>
        );
    }
}

export default Youtube;
