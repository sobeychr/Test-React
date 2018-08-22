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
    }

    collapseDown() {
        return (
            <i>
                <IoIosArrowDropdown className="out" />
                <IoIosArrowDropdownCircle className="hover" />
            </i>
        );
    }

    collapseUp() {
        return (
            <i>
                <IoIosArrowDropup className="out" />
                <IoIosArrowDropupCircle className="hover" />
            </i>
        );
    }

    collapseLeft() {
        return (
            <i>
                <IoIosArrowDropleft className="out" />
                <IoIosArrowDropleftCircle className="hover" />
            </i>
        );
    }

    collapseRight() {
        return (
            <i>
                <IoIosArrowDropright className="out" />
                <IoIosArrowDroprightCircle className="hover" />
            </i>
        );
    }

    render() {
        let icon = this.collapseUp();

        if (this.props.direction === 'down') {
            icon = this.props.open ? this.collapseDown() : this.collapseUp();
        } else if (this.props.direction === 'up') {
            icon = this.props.open ? this.collapseUp() : this.collapseDown();
        } else if (this.props.direction === 'left') {
            icon = this.props.open ? this.collapseLeft() : this.collapseRight();
        } else if (this.props.direction === 'right') {
            icon = this.props.open ? this.collapseRight() : this.collapseLeft();
        }

        return <span className="collapse_icon">{icon}</span>;
    }
}

export default CollapseIcon;
