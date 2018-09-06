import React from 'react';
import CollapseIcon from './../component/collapseicon';
import { FaSave, FaSync } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';
import Header from './../component/global/header';
import YoutubeEntry from './../component/youtubeentry';
import YoutubeLink from './../component/youtubelink';
import '../../scss/page/youtube.scss';

class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleSlide = this.handleSlide.bind(this);
        this.handleUrl = this.handleUrl.bind(this);

        this.state = {
            band: '',
            name: '',
            video: '',
            url: '',

            asideOpen: true,
            slideOpen: true,
            isLoading: false,
            videos: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('./json/youtube.json')
            .then(response => response.json())
            .then(json => {
                json.sort(this.sortVideos);
                this.setState({
                    isLoading: false,
                    videos: json
                });
            });
    }

    handleAdd(event) {
        event.preventDefault();

        let newVideos = this.state.videos;
        newVideos.push({
            band: this.state.band,
            name: this.state.name,
            video: this.state.video
        });

        newVideos = newVideos.sort(this.sortVideos);

        this.setState({
            band: '',
            name: '',
            video: '',
            videos: newVideos
        });
    }

    handleChange(event) {
        const target = event.target;
        let obj = {};
        obj[target.id] = target.value;
        this.setState(obj);
    }

    handleCollapse() {
        const newOpen = !this.state.asideOpen;
        this.setState({ asideOpen: newOpen });
    }

    handleSave() {
        this.setState({ isLoading: true });

        let data = new FormData();
        data.append('json', JSON.stringify(this.state.videos));

        let post = {
            method: 'POST',
            body: data
        };

        fetch('//test-react.vm:3300/youtube', post)
            .then(response => response.text())
            .then(
                response => {
                    this.setState({
                        isLoading: false,
                        videos: response
                    });
                    console.log('SAVE - done', response);
                },
                error => {
                    this.setState({ isLoading: false });
                    console.log('SAVE - error', error);
                }
            );
    }

    handleSlide() {
        const newOpen = !this.state.slideOpen;
        this.setState({ slideOpen: newOpen });
    }

    handleUrl(event) {
        event.preventDefault();

        let data = new FormData();
        data.append('url', this.state.url);

        let post = {
            method: 'POST',
            body: data
        };

        fetch('//test-react.vm:3300/youtube', post)
            .then(response => response.text())
            .then(
                response => {
                    this.setState({ isLoading: false });
                    console.log('URL - done', response);

                    var json = false;
                    try {
                        json = JSON.parse(response);
                        this.setState({
                            band: json.band,
                            name: json.name,
                            video: json.video
                        });
                    } catch (e) {
                        console.log('URL - done - err', json);
                    }
                },
                error => {
                    this.setState({ isLoading: false });
                    console.log('URL - error', error);
                }
            );
    }

    sortVideos(a, b) {
        if (a.band === b.band) {
            return a.name > b.name ? 1 : -1;
        }
        return a.band > b.band ? 1 : -1;
    }

    render() {
        let asideClass = 'section',
            videoClass = 'youtube_video';

        if (!this.state.asideOpen) {
            asideClass += ' section--close';
        }
        if (!this.state.slideOpen) {
            videoClass += ' youtube_video--close';
        }

        return (
            <div>
                <Header pageName="Youtube" />

                <aside className="aside">
                    <h2
                        className="aside__title parent_icon"
                        onClick={this.handleCollapse}
                    >
                        <CollapseIcon
                            open={this.state.asideOpen}
                            direction="down"
                        />
                        Edit entries
                    </h2>
                    <section className={asideClass}>
                        <form className="youtube_add" onSubmit={this.handleAdd}>
                            <input
                                type="text"
                                id="band"
                                className="youtube_add__input"
                                placeholder="Band"
                                value={this.state.band}
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="name"
                                className="youtube_add__input"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="video"
                                className="youtube_add__input"
                                placeholder="Video ID"
                                value={this.state.video}
                                onChange={this.handleChange}
                            />
                            <button
                                type="submit"
                                className="youtube_add__submit"
                            />
                            {this.state.isLoading ? (
                                <FaSync />
                            ) : (
                                <button
                                    type="button"
                                    className="youtube_add__button icon"
                                    title="save"
                                    onClick={this.handleSave}
                                >
                                    <FiSave className="out" />
                                    <FaSave className="hover" />
                                </button>
                            )}
                        </form>

                        <ul className="youtube_list">
                            {this.state.videos.map((entry, i) => (
                                <YoutubeEntry key={i} {...entry} />
                            ))}
                        </ul>
                    </section>
                </aside>

                <aside className={videoClass}>
                    <button
                        className="youtube_video__button"
                        onClick={this.handleSlide}
                    />
                    <div className="youtube_video__div" />
                </aside>

                <main className="main clearfix">
                    <form className="youtube_url" onSubmit={this.handleUrl}>
                        <input
                            type="text"
                            id="url"
                            className="youtube_url__input"
                            placeholder="YouTube URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="youtube_url__submit" />
                    </form>

                    {this.state.videos.map((entry, i) => (
                        <YoutubeLink key={i} {...entry} />
                    ))}
                </main>
            </div>
        );
    }
}

export default Youtube;
