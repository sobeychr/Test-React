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

        this.handleChange = this.handleChange.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            band: '',
            name: '',
            video: '',

            isLoading: false,
            isSaving: false,
            open: true,
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

    handleChange(event) {
        const target = event.target;
        let obj = {};
        obj[target.id] = target.value;
        this.setState(obj);
    }

    handleCollapse() {
        const newOpen = !this.state.open;
        this.setState({ open: newOpen });
    }

    handleForm(event) {
        event.preventDefault();

        let newVideos = this.state.videos;
        newVideos.push({
            band: this.state.band,
            name: this.state.name,
            video: this.state.video
        });
        this.setState({
            band: '',
            name: '',
            video: '',
            videos: newVideos
        });
    }

    handleSave() {
        this.setState({ isSaving: true });

        let post = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify(this.state.videos)
        };

        fetch('//test-react.vm:3300/test', post)
            .then(response => response.text())
            .then(
                response => {
                    this.setState({ isSaving: false });
                    console.log('done', response);
                },

                error => {
                    this.setState({ isSaving: false });
                    console.log('error', error);
                }
            );
    }

    sortVideos(a, b) {
        if (a.band === b.band) {
            return a.name > b.name;
        }
        return a.band > b.band;
    }

    render() {
        let classDisplay = 'section';
        if (!this.state.open) {
            classDisplay += ' section--close';
        }

        return (
            <div>
                <Header pageName="Youtube" />

                <aside className="aside">
                    <h2
                        className="aside__title parent_icon"
                        onClick={this.handleCollapse}
                    >
                        <CollapseIcon open={this.state.open} direction="down" />
                        Edit entries
                    </h2>
                    <section className={classDisplay}>
                        <ul className="youtube_list">
                            {this.state.videos.map((entry, i) => (
                                <YoutubeEntry key={i} {...entry} />
                            ))}
                        </ul>

                        <form
                            className="youtube_form"
                            onSubmit={this.handleForm}
                        >
                            <input
                                type="text"
                                id="band"
                                className="youtube_form__input"
                                placeholder="Band"
                                value={this.state.band}
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="name"
                                className="youtube_form__input"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="video"
                                className="youtube_form__input"
                                placeholder="Video ID"
                                value={this.state.video}
                                onChange={this.handleChange}
                            />
                            <button
                                type="submit"
                                className="youtube_form__submit"
                            />
                            {this.state.isSaving ? (
                                <FaSync />
                            ) : (
                                <button
                                    type="button"
                                    className="youtube_form__button icon"
                                    title="save"
                                    onClick={this.handleSave}
                                >
                                    <FiSave className="out" />
                                    <FaSave className="hover" />
                                </button>
                            )}
                        </form>
                    </section>
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
