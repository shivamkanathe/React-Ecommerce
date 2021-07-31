import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../style/SettingCart.css";

function SettingCart(props) {
    console.log( props);
    return (
        <div className="cards">
            <p className="parass">{props.title}</p>
            <FontAwesomeIcon icon={faAngleRight} className="icons" />
        </div>
    )
}

export default SettingCart
