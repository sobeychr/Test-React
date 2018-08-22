import React from 'react';
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

class CollapseIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: 'up'
        };
    }

    collapseDown() {
        return (
            <i>
                <IoIosArrowDropup className="out" />
                <IoIosArrowDropupCircle className="hover" />
            </i>
        );
    }

    collapseUp() {
        return (
            <i>
                <IoIosArrowDropdown className="out" />
                <IoIosArrowDropdownCircle className="hover" />
            </i>
        );
    }

    render() {
        let icon = this.collapseUp();

        if (this.state.direction === 'down') {
            icon = this.collapseDown();
        }

        return <span className="collapse_icon">{icon}</span>;
    }
}

export default CollapseIcon;
