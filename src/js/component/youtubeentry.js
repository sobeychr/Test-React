import React from 'react';
import { IoIosCloseCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import '../../scss/component/youtubeentry.scss';

const YoutubeEntry = ({ band, name, video }) => (
    <li className="youtube_entry">
        <i className="icon">
            <IoIosCloseCircle className="out" />
            <IoIosCloseCircleOutline className="hover" />
        </i>

        {band + ' ' + name + ' ' + video}
    </li>
);

export default YoutubeEntry;
