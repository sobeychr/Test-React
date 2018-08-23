import React from 'react';
import '../../scss/component/youtubeentry.scss';

const YoutubeEntry = ({ band, name, video }) => (
    <li className="youtube_entry">{band + ' ' + name + ' ' + video}</li>
);

export default YoutubeEntry;
