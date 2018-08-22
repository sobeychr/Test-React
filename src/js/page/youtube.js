import React from 'react';
import Header from './../component/global/header';
import YoutubeLink from './../component/youtubelink';
import '../../scss/page/youtube.scss';

class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            videos: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('./json/youtube.json')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({ videos: json });
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div>
                <Header pageName="Youtube" />

                <main className="main clearfix">
                    {this.state.videos.map((entry, i) => (
                        <YoutubeLink key={i} {...entry} />
                    ))}
                </main>
            </div>
        );
    }
}

export default Youtube;
