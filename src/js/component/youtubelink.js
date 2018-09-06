import React from 'react';
import '../../scss/component/youtubelink.scss';

const YoutubeLink = ({ band, name, video, onClick }) => (
    <div className="youtube_link" onClick={onClick}>
        <span className="youtube_link__band">{band}</span>
        <span className="youtube_link__name">{name}</span>
        <img
            src={'https://img.youtube.com/vi/' + video + '/0.jpg'}
            alt={band + ' - ' + name}
            className="youtube_link__img"
        />
    </div>
);

export default YoutubeLink;
