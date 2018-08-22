import React from 'react';
import Header from './../component/global/header';
import YoutubeLink from './../component/youtubelink';
import '../../scss/page/youtube.scss';

class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [
                {
                    band: 'Viking',
                    name: 'Dagr',
                    video: 'FsSd-1AE4QY'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                },
                {
                    band: 'Viking',
                    name: 'Helvegen',
                    video: 'DD65K4VR6Lw'
                }
            ]
        };
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
