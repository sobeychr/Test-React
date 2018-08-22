import React from 'react';
import '../../scss/component/youtubelink.scss';

const YoutubeLink = ({ name }) => (
    <Link to={'/' + name} className="index_link">
        <img
            src={'img/icon/' + name + '.png'}
            alt={name}
            className="index_link__img"
        />
    </Link>
);

export default YoutubeLink;
