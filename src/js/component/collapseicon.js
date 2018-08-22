import React from 'react';
import PropTypes from 'prop-types';
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDropdown,
    IoIosArrowDropleftCircle,
    IoIosArrowDropleft,
    IoIosArrowDroprightCircle,
    IoIosArrowDropright,
    IoIosArrowDropupCircle,
    IoIosArrowDropup
} from 'react-icons/io';
import '../../scss/component/collapseicon.scss';

/*
{(upDown) ?
    <i>
        <IoIosArrowDropdownCircle className="open out"/>
        <IoIosArrowDropdown className="open hover"/>
        <IoIosArrowDropupCircle className="close out"/>
        <IoIosArrowDropup className="close hover"/>
    </i>
    :
    <i>
        <IoIosArrowDropdownCircle className="open out"/>
        <IoIosArrowDropdown className="open hover"/>
        <IoIosArrowDropupCircle className="close out"/>
        <IoIosArrowDropup className="close hover"/>
    </i>
}
*/

const CollapseIcon = () => <span className="collapse_icon">test</span>;

export default CollapseIcon;
