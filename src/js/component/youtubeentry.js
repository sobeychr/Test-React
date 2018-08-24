import React from 'react';
import { IoIosCloseCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import '../../scss/component/youtubeentry.scss';

const YoutubeEntry = ({ band, name, video }) => (
    <li className="youtube_entry">
        <i className="icon">
            <IoIosCloseCircleOutline className="out" />
            <IoIosCloseCircle className="hover" />
        </i>
        <span className="youtube_entry__band">{band}</span>
        <span className="youtube_entry__name">{name}</span>
        <span className="youtube_entry__video">{video}</span>
    </li>
);

export default YoutubeEntry;
