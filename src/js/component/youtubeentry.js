import React from 'react';
import { IoIosCloseCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import '../../scss/component/youtubeentry.scss';

const YoutubeEntry = ({ band, name, video }) => (
    <li className="youtube_entry">
        <i className="icon">
            <IoIosCloseCircleOutline className="out" />
            <IoIosCloseCircle className="hover" />
        </i>

        {band + ' ' + name + ' ' + video}
    </li>
);

export default YoutubeEntry;
