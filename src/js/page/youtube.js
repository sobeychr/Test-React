import React from 'react';
import CollapseIcon from './../component/collapseicon';
import Header from './../component/global/header';
import YoutubeEntry from './../component/youtubeentry';
import YoutubeLink from './../component/youtubelink';
import '../../scss/page/youtube.scss';

class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
            open: true,
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
                json.sort(this.sortVideos);
                this.setState({ videos: json });
                this.setState({ isLoading: false });
            });
    }

    handleClick() {
        const newOpen = !this.state.open;
        this.setState({ open: newOpen });
    }

    sortVideos(a, b) {
        if (a.band === b.band) {
            return a.name > b.name;
        }
        return a.band > b.band;
    }

    render() {
        let classDisplay = 'list__content section';
        if (!this.state.open) {
            classDisplay += ' section--close';
        }

        return (
            <div>
                <Header pageName="Youtube" />

                <aside className="aside">
                    <h2
                        className="aside__title parent_icon"
                        onClick={this.handleClick}
                    >
                        <CollapseIcon open={this.state.open} direction="down" />
                        Edit entries
                    </h2>
                    <ul className={classDisplay}>
                        {this.state.videos.map((entry, i) => (
                            <YoutubeEntry key={i} {...entry} />
                        ))}
                    </ul>
                </aside>

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
